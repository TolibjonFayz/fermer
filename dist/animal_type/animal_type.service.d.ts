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
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { AnimalType } from './schemas/animal_type.schema';
import { Model } from 'mongoose';
export declare class AnimalTypeService {
    private AnimalTypeModel;
    constructor(AnimalTypeModel: Model<AnimalType>);
    create(createAnimalTypeDto: CreateAnimalTypeDto): Promise<import("mongoose").Document<unknown, {}, AnimalType> & AnimalType & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, AnimalType> & AnimalType & {
        _id: import("mongoose").Types.ObjectId;
    })[] | "Any animal types not found">;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, AnimalType> & AnimalType & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Any animal type not found at this id">;
    update(id: string, updateAnimalTypeDto: UpdateAnimalTypeDto): Promise<(import("mongoose").Document<unknown, {}, AnimalType> & AnimalType & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Animal type not found at this id ">;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, AnimalType> & AnimalType & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Animal type not found at this id">;
}
