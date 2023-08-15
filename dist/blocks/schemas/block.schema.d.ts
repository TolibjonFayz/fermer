import mongoose, { HydratedDocument } from 'mongoose';
import { Info } from '../../info/schemas/info.schema';
export type BlockDocument = HydratedDocument<Block>;
export declare class Block {
    number: number;
    description: string;
    info: Info[];
}
export declare const BlockSchema: mongoose.Schema<Block, mongoose.Model<Block, any, any, any, mongoose.Document<unknown, any, Block> & Block & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Block, mongoose.Document<unknown, {}, Block> & Block & {
    _id: mongoose.Types.ObjectId;
}>;
