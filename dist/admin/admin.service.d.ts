/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './schemas/admin.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { MailService } from '../mail/mail.service';
import { SignInAdminDto } from './dto/signin-admin.dto';
export declare class AdminService {
    private adminModel;
    private readonly jwtService;
    private readonly mailService;
    constructor(adminModel: Model<Admin>, jwtService: JwtService, mailService: MailService);
    findAll(): Promise<Admin[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    signUp(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        admin: import("mongoose").Document<unknown, {}, Admin> & Admin & {
            _id: import("mongoose").Types.ObjectId;
        };
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    getTokens(admin: Admin): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signIn(singInAdminDto: SignInAdminDto, res: Response): Promise<{
        message: string;
        admin: import("mongoose").Document<unknown, {}, Admin> & Admin & {
            _id: import("mongoose").Types.ObjectId;
        };
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    signout(refresh_token: string, res: Response): Promise<{
        message: string;
    }>;
    activate(link: string): Promise<{
        message: string;
        admin: import("mongoose").UpdateWriteOpResult;
    }>;
    refreshToken(admin_id: string, refreshToken: string, res: Response): Promise<{
        message: string;
        admin: import("mongoose").Document<unknown, {}, Admin> & Admin & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
}
