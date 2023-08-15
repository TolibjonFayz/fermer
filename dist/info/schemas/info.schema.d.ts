import mongoose, { HydratedDocument } from 'mongoose';
import { Block } from '../../blocks/schemas/block.schema';
import { Animal } from '../../animals/schemas/animal.schema';
export type InfoDocument = HydratedDocument<Info>;
export declare class Info {
    weight: number;
    color: string;
    height: number;
    breed: string;
    gender: string;
    birth_or_acquisition: string;
    block_id: Block;
    animal_id: Animal;
    parent_id: Animal;
}
export declare const InfoSchema: mongoose.Schema<Info, mongoose.Model<Info, any, any, any, mongoose.Document<unknown, any, Info> & Info & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Info, mongoose.Document<unknown, {}, Info> & Info & {
    _id: mongoose.Types.ObjectId;
}>;
