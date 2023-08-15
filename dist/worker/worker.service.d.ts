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
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker, WorkerDocument } from './schemas/worker.schema';
import { Model } from 'mongoose';
import { SpecialityDocument } from '../speciality/schemas/speciality.schema';
export declare class WorkerService {
    private workerModel;
    private specModel;
    constructor(workerModel: Model<WorkerDocument>, specModel: Model<SpecialityDocument>);
    create(createWorkerDto: CreateWorkerDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    }, "find">;
    findOne(id: number): string;
    update(id: number, updateWorkerDto: UpdateWorkerDto): string;
    remove(id: number): string;
}
