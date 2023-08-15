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
let AdminService = exports.AdminService = class AdminService {
    constructor(adminModel, jwtService) {
        this.adminModel = adminModel;
        this.jwtService = jwtService;
    }
    async create(createAdminDto) {
        const { password, confirm_password } = createAdminDto;
        if (password !== confirm_password) {
            return new common_1.BadRequestException('Password is not match');
        }
        const hashed_password = await bcrypt.hash(password, 8);
        const createdAdmin = await new this.adminModel({
            ...createAdminDto,
            hashed_password: hashed_password,
        }).save();
        const tokens = await this.generateToken(createdAdmin);
        console.log(tokens);
        const hashed_token = await bcrypt.hash(tokens.refresh_token, 10);
        const updateAdmin = await this.adminModel.findByIdAndUpdate(createdAdmin.id, { hashed_token }, { new: true });
        return updateAdmin;
    }
    async generateToken(admin) {
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
};
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map