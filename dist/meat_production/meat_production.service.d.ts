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
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { MeatProduction } from './schemas/meat_production.schema';
import { Model } from 'mongoose';
export declare class MeatProductionService {
    private MeatProductionModel;
    constructor(MeatProductionModel: Model<MeatProduction>);
    create(createMeatProductionDto: CreateMeatProductionDto): Promise<import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[] | "Any meat product not found...">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Meat product not found at this ID">;
    update(id: string, updateMeatProductionDto: UpdateMeatProductionDto): Promise<(import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Meat product not found at this ID">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, MeatProduction> & MeatProduction & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Meat product not found at this ID">;
}
