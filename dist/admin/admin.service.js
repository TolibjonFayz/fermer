"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const admin_schema_1 = require("./schemas/admin.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
const uuid_1 = require("uuid");
let AdminService = exports.AdminService = class AdminService {
    constructor(adminModel, jwtService, mailService) {
        this.adminModel = adminModel;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async findAll() {
        const admins = await this.adminModel.find();
        return admins;
    }
    async findOne(id) {
        const admin = await this.adminModel.findById(id).exec();
        return admin;
    }
    async update(id, updateAdminDto) {
        const existingAdmin = await this.adminModel
            .findByIdAndUpdate(id, updateAdminDto, { new: true })
            .exec();
        if (!existingAdmin) {
            throw new common_1.NotFoundException(`Admin #${id} not found`);
        }
        return existingAdmin;
    }
    async remove(id) {
        return this.adminModel.findByIdAndDelete(id);
    }
    async signUp(createAdminDto, res) {
        const admin = await this.adminModel.findOne({
            email: createAdminDto.email,
        });
        if (admin) {
            throw new common_1.BadRequestException('Admin already exists');
        }
        if (createAdminDto.password !== createAdminDto.confirm_password) {
            throw new common_1.BadRequestException('Password does not match');
        }
        const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
        const newAdmin = await this.adminModel.create({
            ...createAdminDto,
            hashed_password: hashed_password,
        });
        const tokens = await this.getTokens(newAdmin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const uniqueKey = (0, uuid_1.v4)();
        const updateAdmin = await this.adminModel.updateOne({ email: createAdminDto.email }, {
            $set: {
                hashed_token: hashed_refresh_token,
                activation_link: uniqueKey,
            },
        });
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
        }
        catch (error) {
            console.log(error);
        }
        return response;
    }
    async getTokens(admin) {
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
    async signIn(singInAdminDto, res) {
        const { email, password } = singInAdminDto;
        const admin = await this.adminModel.findOne({ email: email });
        if (!admin) {
            throw new common_1.UnauthorizedException('Admin has not authorized');
        }
        const isMatches = await bcrypt.compare(password, admin.hashed_password);
        if (!isMatches) {
            throw new common_1.UnauthorizedException('Admin has not registered(pass)');
        }
        const tokens = await this.getTokens(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateAdmin = await this.adminModel.updateOne({ email: admin.email }, { $set: { hashed_token: hashed_refresh_token } });
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
    async signout(refresh_token, res) {
        const adminData = await this.jwtService.verify(refresh_token, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!adminData) {
            throw new common_1.ForbiddenException('Admin not found');
        }
        const updateAdmin = await this.adminModel.updateOne({ id: adminData.id }, { hashed_token: null });
        res.clearCookie('refresh_token');
        const response = {
            message: 'Admin signed out successfully',
        };
        return response;
    }
    async activate(link) {
        if (!link) {
            throw new common_1.BadRequestException('Activation link not found');
        }
        const updateAdmin = await this.adminModel.updateOne({ activation_link: link, is_active: false }, { $set: { is_active: true } });
        if (!updateAdmin.modifiedCount) {
            throw new common_1.BadRequestException('Admin already activated');
        }
        const response = {
            message: 'Admin successfully updated',
            admin: updateAdmin,
        };
        return response;
    }
    async refreshToken(admin_id, refreshToken, res) {
        const decodedToken = this.jwtService.decode(refreshToken);
        if (admin_id != decodedToken['id']) {
            throw new common_1.BadRequestException('admin not found');
        }
        const admin = await this.adminModel.findOne({ _id: admin_id });
        if (!admin || !admin.hashed_token) {
            throw new common_1.BadRequestException('admin not found');
        }
        const tokenMatch = await bcrypt.compare(refreshToken, admin.hashed_token);
        if (!tokenMatch) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const token = await this.getTokens(admin);
        const hashed_refresh_token = await bcrypt.hash(token.refresh_token, 7);
        const updateAdmin = await this.adminModel.updateOne({ _id: admin.id }, { hashed_token: hashed_refresh_token });
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
};
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AdminService);
//# sourceMappingURL=admin.service.js.map