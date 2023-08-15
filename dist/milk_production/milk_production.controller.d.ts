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
import { MilkProductionService } from './milk_production.service';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
export declare class MilkProductionController {
    private readonly milkProductionService;
    constructor(milkProductionService: MilkProductionService);
    create(createMilkProductionDto: CreateMilkProductionDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/milk_production.schema").MilkProduction> & import("./schemas/milk_production.schema").MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, import("./schemas/milk_production.schema").MilkProduction> & import("./schemas/milk_production.schema").MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[] | "Any MilkProduct not found">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/milk_production.schema").MilkProduction> & import("./schemas/milk_production.schema").MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Milk product not found at this ID">;
    update(id: string, updateMilkProductionDto: UpdateMilkProductionDto): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/milk_production.schema").MilkProduction> & import("./schemas/milk_production.schema").MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Milk product not found at this ID">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/milk_production.schema").MilkProduction> & import("./schemas/milk_production.schema").MilkProduction & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Milk product not found at this ID">;
}
