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
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { Feeding } from './schemas/feeding.schema';
import { Model } from 'mongoose';
export declare class FeedingService {
    private FeedingModel;
    constructor(FeedingModel: Model<Feeding>);
    create(createFeedingDto: CreateFeedingDto): Promise<import("mongoose").Document<unknown, {}, Feeding> & Feeding & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, Feeding> & Feeding & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[] | "Ant feeding not found">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Feeding> & Feeding & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Feeding not found at this id">;
    update(id: string, updateFeedingDto: UpdateFeedingDto): Promise<(import("mongoose").Document<unknown, {}, Feeding> & Feeding & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Updating not found at this ID or smt wrong">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, Feeding> & Feeding & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Feeding not found at this ID or smt wrong">;
}
