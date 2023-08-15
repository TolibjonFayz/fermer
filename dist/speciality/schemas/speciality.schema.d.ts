import mongoose, { HydratedDocument } from 'mongoose';
import { Worker } from '../../worker/schemas/worker.schema';
export type SpecialityDocument = HydratedDocument<Speciality>;
export declare class Speciality {
    title: string;
    description: string;
    workers: Worker[];
}
export declare const SpecialitySchema: mongoose.Schema<Speciality, mongoose.Model<Speciality, any, any, any, mongoose.Document<unknown, any, Speciality> & Speciality & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Speciality, mongoose.Document<unknown, {}, Speciality> & Speciality & {
    _id: mongoose.Types.ObjectId;
}>;
