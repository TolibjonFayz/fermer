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
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { RecordsOF } from './schemas/records_of_feeding.schema';
import { Model } from 'mongoose';
export declare class RecordsOfFeedingService {
    private RecordsOFModel;
    constructor(RecordsOFModel: Model<RecordsOF>);
    create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto): Promise<import("mongoose").Document<unknown, {}, RecordsOF> & RecordsOF & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, RecordsOF> & RecordsOF & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[] | "Any recordsOF not found">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, RecordsOF> & RecordsOF & {
        _id: import("mongoose").Types.ObjectId;
    }) | "RecordsOF not found at this ID">;
    update(id: string, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto): Promise<(import("mongoose").Document<unknown, {}, RecordsOF> & RecordsOF & {
        _id: import("mongoose").Types.ObjectId;
    }) | "RecordsOF not found at this ID">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, RecordsOF> & RecordsOF & {
        _id: import("mongoose").Types.ObjectId;
    }) | "RecordsOF not found at this ID">;
}
