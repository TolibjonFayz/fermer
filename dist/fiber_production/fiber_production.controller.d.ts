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
import { FiberProductionService } from './fiber_production.service';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
export declare class FiberProductionController {
    private readonly fiberProductionService;
    constructor(fiberProductionService: FiberProductionService);
    create(createFiberProductionDto: CreateFiberProductionDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/fiber_production.entity").Fiber_production> & import("./schemas/fiber_production.entity").Fiber_production & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, import("./schemas/fiber_production.entity").Fiber_production> & import("./schemas/fiber_production.entity").Fiber_production & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[] | "Any fiber product not found">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/fiber_production.entity").Fiber_production> & import("./schemas/fiber_production.entity").Fiber_production & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Fiber not found at this ID">;
    update(id: string, updateFiberProductionDto: UpdateFiberProductionDto): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/fiber_production.entity").Fiber_production> & import("./schemas/fiber_production.entity").Fiber_production & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Fiber product not found at this ID">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/fiber_production.entity").Fiber_production> & import("./schemas/fiber_production.entity").Fiber_production & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Fiber product not found at this ID">;
}
