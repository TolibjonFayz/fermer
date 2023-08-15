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
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { VaccinationH } from './schemas/vaccination_history.schema';
import { Model } from 'mongoose';
export declare class VaccinationHistoryService {
    private VaccinationHMmodel;
    constructor(VaccinationHMmodel: Model<VaccinationH>);
    create(createVaccinationHistoryDto: CreateVaccinationHistoryDto): Promise<import("mongoose").Document<unknown, {}, VaccinationH> & VaccinationH & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, VaccinationH> & VaccinationH & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[] | "Any VaccinationHistory not found">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, VaccinationH> & VaccinationH & {
        _id: import("mongoose").Types.ObjectId;
    }) | "VaccationHistory not found at this id">;
    update(id: string, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto): Promise<(import("mongoose").Document<unknown, {}, VaccinationH> & VaccinationH & {
        _id: import("mongoose").Types.ObjectId;
    }) | "VaccationH not found at this id">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, VaccinationH> & VaccinationH & {
        _id: import("mongoose").Types.ObjectId;
    }) | "VaccationHistory not found at this id">;
}
