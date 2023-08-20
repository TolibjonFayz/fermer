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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Response } from 'express';
import { SignInAdminDto } from './dto/signin-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    findAll(): Promise<import("./schemas/admin.schema").Admin[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/admin.schema").Admin> & import("./schemas/admin.schema").Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/admin.schema").Admin> & import("./schemas/admin.schema").Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/admin.schema").Admin> & import("./schemas/admin.schema").Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    register(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        admin: import("mongoose").Document<unknown, {}, import("./schemas/admin.schema").Admin> & import("./schemas/admin.schema").Admin & {
            _id: import("mongoose").Types.ObjectId;
        };
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    activate(link: string): Promise<{
        message: string;
        admin: import("mongoose").UpdateWriteOpResult;
    }>;
    signin(signInAdminDto: SignInAdminDto, res: Response): Promise<{
        message: string;
        admin: import("mongoose").Document<unknown, {}, import("./schemas/admin.schema").Admin> & import("./schemas/admin.schema").Admin & {
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
    refresh(id: string, refreshToken: string, res: Response): Promise<{
        message: string;
        admin: import("mongoose").Document<unknown, {}, import("./schemas/admin.schema").Admin> & import("./schemas/admin.schema").Admin & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
}
