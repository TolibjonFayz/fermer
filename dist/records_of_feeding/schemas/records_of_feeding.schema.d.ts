import mongoose, { HydratedDocument } from 'mongoose';
import { Feeding } from '../../feeding/schemas/feeding.schema';
export type RecordsOFDocument = HydratedDocument<RecordsOF>;
export declare class RecordsOF {
    date: string;
    consumption: string;
    feeding_id: Feeding;
}
export declare const RecordsOFSchema: mongoose.Schema<RecordsOF, mongoose.Model<RecordsOF, any, any, any, mongoose.Document<unknown, any, RecordsOF> & RecordsOF & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, RecordsOF, mongoose.Document<unknown, {}, RecordsOF> & RecordsOF & {
    _id: mongoose.Types.ObjectId;
}>;
