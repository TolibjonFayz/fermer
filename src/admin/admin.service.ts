import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './schemas/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { MailService } from '../mail/mail.service';
import { v4 as uuidv4 } from 'uuid';
import { SignInAdminDto } from './dto/signin-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  //Get all admins
  async findAll(): Promise<Admin[]> {
    const admins = await this.adminModel.find();
    return admins;
  }

  //Get admin by id
  async findOne(id: string) {
    const admin = await this.adminModel.findById(id).exec();
    return admin;
  }

  //Update admin
  async update(id: string, updateAdminDto: UpdateAdminDto) {
    const existingAdmin = await this.adminModel
      .findByIdAndUpdate(id, updateAdminDto, { new: true })
      .exec();

    if (!existingAdmin) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    return existingAdmin;
  }

  //Delete admin by id
  async remove(id: string) {
    return this.adminModel.findByIdAndDelete(id);
  }

  //Signup admin
  async signUp(createAdminDto: CreateAdminDto, res: Response) {
    const admin = await this.adminModel.findOne({
      email: createAdminDto.email,
    });

    if (admin) {
      throw new BadRequestException('Admin already exists');
    }
    if (createAdminDto.password !== createAdminDto.confirm_password) {
      throw new BadRequestException('Password does not match');
    }

    const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminModel.create({
      ...createAdminDto,
      hashed_password: hashed_password,
    });

    const tokens = await this.getTokens(newAdmin);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const uniqueKey: string = uuidv4();

    const updateAdmin = await this.adminModel.updateOne(
      { email: createAdminDto.email },
      {
        $set: {
          hashed_token: hashed_refresh_token,
          activation_link: uniqueKey,
        },
      },
    );

    const adminn = await this.adminModel.findOne({
      email: createAdminDto.email,
    });

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });

    const response = {
      message: 'Admin signed up successfully',
      admin: adminn,
      tokens,
    };

    try {
      await this.mailService.sendAdminConfrmation(adminn);
    } catch (error) {
      console.log(error);
    }

    return response;
  }

  //Token generetsiya qilish
  async getTokens(admin: Admin) {
    const JwtPayload = {
      id: admin['_id'],
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(JwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(JwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  //Signin admin
  async signIn(singInAdminDto: SignInAdminDto, res: Response) {
    const { email, password } = singInAdminDto;
    const admin = await this.adminModel.findOne({ email: email });

    if (!admin) {
      throw new UnauthorizedException('Admin has not authorized');
    }

    const isMatches = await bcrypt.compare(password, admin.hashed_password);
    if (!isMatches) {
      throw new UnauthorizedException('Admin has not registered(pass)');
    }

    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updateAdmin = await this.adminModel.updateOne(
      { email: admin.email },
      { $set: { hashed_token: hashed_refresh_token } },
    );

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 10000,
      httpOnly: true,
    });

    const adminn = await this.adminModel.findOne({ email: admin.email });

    const response = {
      message: 'Admin signin successfully done',
      admin: adminn,
      tokens,
    };
    return response;
  }

  //Signout admin
  async signout(refresh_token: string, res: Response) {
    const adminData = await this.jwtService.verify(refresh_token, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!adminData) {
      throw new ForbiddenException('Admin not found');
    }

    const updateAdmin = await this.adminModel.updateOne(
      { id: adminData.id },
      { hashed_token: null },
    );

    res.clearCookie('refresh_token');
    const response = {
      message: 'Admin signed out successfully',
    };
    return response;
  }

  //Activate admin
  async activate(link: string) {
    if (!link) {
      throw new BadRequestException('Activation link not found');
    }
    const updateAdmin = await this.adminModel.updateOne(
      { activation_link: link, is_active: false },
      { $set: { is_active: true } },
    );

    if (!updateAdmin.modifiedCount) {
      throw new BadRequestException('Admin already activated');
    }

    const response = {
      message: 'Admin successfully updated',
      admin: updateAdmin,
    };
    return response;
  }

  //refreshToken admin
  async refreshToken(admin_id: string, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);

    if (admin_id != decodedToken['id']) {
      throw new BadRequestException('admin not found');
    }

    const admin = await this.adminModel.findOne({ _id: admin_id });

    if (!admin || !admin.hashed_token) {
      throw new BadRequestException('admin not found');
    }

    const tokenMatch = await bcrypt.compare(refreshToken, admin.hashed_token);

    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }
    const token = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(token.refresh_token, 7);
    const updateAdmin = await this.adminModel.updateOne(
      { _id: admin.id },
      { hashed_token: hashed_refresh_token },
    );

    res.cookie('refresh_token', token.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Admin refreshed',
      admin: admin,
      token,
    };
    return response;
  }
}
