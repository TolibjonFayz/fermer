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
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { Speciality } from './schemas/speciality.schema';
import { Model } from 'mongoose';
export declare class SpecialityService {
    private SpecialityModel;
    constructor(SpecialityModel: Model<Speciality>);
    create(createSpecialityDto: CreateSpecialityDto): Promise<import("mongoose").Document<unknown, {}, Speciality> & Speciality & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, Speciality> & Speciality & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Speciality> & Speciality & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateSpecialityDto: UpdateSpecialityDto): Promise<import("mongoose").Document<unknown, {}, Speciality> & Speciality & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, Speciality> & Speciality & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Speciality not found at this id">;
}
