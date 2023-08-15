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
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Block } from './schemas/block.schema';
import { Model } from 'mongoose';
export declare class BlocksService {
    private BlockModel;
    constructor(BlockModel: Model<Block>);
    create(createBlockDto: CreateBlockDto): Promise<import("mongoose").Document<unknown, {}, Block> & Block & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, Block> & Block & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[] | "Any blocks not found">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Block> & Block & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Block not found at this id">;
    update(id: string, updateBlockDto: UpdateBlockDto): Promise<import("mongoose").Document<unknown, {}, Block> & Block & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, Block> & Block & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Block not found at this id">;
}
