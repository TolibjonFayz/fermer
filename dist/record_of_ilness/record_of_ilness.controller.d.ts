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
import { RecordOfIlnessService } from './record_of_ilness.service';
import { CreateRecordOfIlnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
export declare class RecordOfIlnessController {
    private readonly recordOfIlnessService;
    constructor(recordOfIlnessService: RecordOfIlnessService);
    create(createRecordOfIlnessDto: CreateRecordOfIlnessDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/record_of_ilness.schema").RecordOI> & import("./schemas/record_of_ilness.schema").RecordOI & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, import("./schemas/record_of_ilness.schema").RecordOI> & import("./schemas/record_of_ilness.schema").RecordOI & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[] | "Any records of illness not found">;
    findOne(id: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("./schemas/record_of_ilness.schema").RecordOI> & import("./schemas/record_of_ilness.schema").RecordOI & {
        _id: import("mongoose").Types.ObjectId;
    }, never> | "Reocrd of illness not found at this id">;
    update(id: string, updateRecordOfIlnessDto: UpdateRecordOfIlnessDto): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/record_of_ilness.schema").RecordOI> & import("./schemas/record_of_ilness.schema").RecordOI & {
        _id: import("mongoose").Types.ObjectId;
    }) | "RecordOI not found at this ID">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/record_of_ilness.schema").RecordOI> & import("./schemas/record_of_ilness.schema").RecordOI & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Record of illness not found at this id">;
}
