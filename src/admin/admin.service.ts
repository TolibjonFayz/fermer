import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  //Create admin
  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password } = createAdminDto;
    if (password !== confirm_password) {
      return new BadRequestException('Password is not match');
    }
    //hashing password
    const hashed_password = await bcrypt.hash(password, 8);

    const createdAdmin = await new this.adminModel({
      ...createAdminDto,
      hashed_password: hashed_password,
    }).save();

    //generate token
    const tokens = await this.generateToken(createdAdmin);

    console.log(tokens);

    const hashed_token = await bcrypt.hash(tokens.refresh_token, 10);

    const updateAdmin = await this.adminModel.findByIdAndUpdate(
      createdAdmin.id,
      { hashed_token },
      { new: true },
    );

    return updateAdmin;
  }

  //Generate token
  async generateToken(admin: AdminDocument) {
    const jwtPayload = {
      id: admin.id,
      is_creator: admin.is_creator,
      is_active: admin.is_active,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    const response = {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
    return response;
  }

  async findAll(): Promise<Admin[]> {
    const admins = await this.adminModel.find();
    return admins;
  }

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

  async remove(id: string) {
    return this.adminModel.findByIdAndDelete(id);
  }

  //Signup admin
  // async signUp(createAdminDto: CreateAdminDto, res: Response) {
  //   const admin = await this.adminModel.findOne({
  //     email: createAdminDto.email,
  //   });

  //   if (admin) {
  //     throw new BadRequestException('Admin already exists');
  //   }
  //   if (createAdminDto.password !== createAdminDto.confirm_password) {
  //     throw new BadRequestException('Password does not match');
  //   }

  //   const hashed_password = await bcrypt.hash(createAdminDto.password, 10);
  //   const newAdmin = await this.adminModel.insertMany([
  //     { ...createAdminDto, hashed_password: hashed_password },
  //   ]);

  //   const tokens = await this.getTokens(newAdmin);

  //   const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 10);
  //   const uniqueKey: string = uuidv4();
  //   const updateAdmin = await this.adminModel.updateOne(
  //     {
  //       hashed_refresh_token: hashed_refresh_token,
  //       activation_link: uniqueKey,
  //     },
  //     { where: { id: newAdmin.id }, returning: true },
  //   );

  //   res.cookie('refresh_token', tokens.refresh_token, {
  //     maxAge: 15 * 24 * 60 * 60 * 1000,
  //     });

  //     const response = {
  //       message: 'Admin signed up successfully',
  //       admin: updateAdmin[1][0],
  //       tokens,
  //     };

  //     try {
  //       await this.mailService.sendAdminConfrmation(updateAdmin[1][0]);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     return response;
  // }

  // Token generetsiya qilish
  // async getTokens(admin: Admin) {
  //   const JwtPayload = {
  //     id: admin.id,
  //     is_active: admin.is_active,
  //     is_creator: admin.is_creator,
  //   };

  //   const [accessToken, refreshToken] = await Promise.all([
  //     this.jwtService.signAsync(JwtPayload, {
  //       secret: process.env.ACCESS_TOKEN_KEY,
  //       expiresIn: process.env.ACCESS_TOKEN_TIME,
  //     }),
  //     this.jwtService.signAsync(JwtPayload, {
  //       secret: process.env.REFRESH_TOKEN_KEY,
  //       expiresIn: process.env.REFRESH_TOKEN_TIME,
  //     }),
  //   ]);
  //   return {
  //     access_token: accessToken,
  //     refresh_token: refreshToken,
  //   };
  // }
}
