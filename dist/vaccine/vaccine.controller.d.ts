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
import { VaccineService } from './vaccine.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
export declare class VaccineController {
    private readonly vaccineService;
    constructor(vaccineService: VaccineService);
    create(createVaccineDto: CreateVaccineDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/vaccine.schema").Vaccine> & import("./schemas/vaccine.schema").Vaccine & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/vaccine.schema").Vaccine> & import("./schemas/vaccine.schema").Vaccine & {
        _id: import("mongoose").Types.ObjectId;
    })[] | "Any vaccine not found">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/vaccine.schema").Vaccine> & import("./schemas/vaccine.schema").Vaccine & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Vaccine not found at this ID">;
    update(id: string, updateVaccineDto: UpdateVaccineDto): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/vaccine.schema").Vaccine> & import("./schemas/vaccine.schema").Vaccine & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Vaccine not found at this ID">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/vaccine.schema").Vaccine> & import("./schemas/vaccine.schema").Vaccine & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Vaccine not found at this ID or smt wrong">;
}
