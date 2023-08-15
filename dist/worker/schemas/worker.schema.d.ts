import mongoose, { HydratedDocument } from 'mongoose';
import { Speciality } from '../../speciality/schemas/speciality.schema';
export type WorkerDocument = HydratedDocument<Worker>;
export declare class Worker {
    name: string;
    age: number;
    experience: number;
    phone_number: string;
    username: string;
    hashed_token: string;
    speciality_id: Speciality;
}
export declare const WorkerSchema: mongoose.Schema<Worker, mongoose.Model<Worker, any, any, any, mongoose.Document<unknown, any, Worker> & Worker & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Worker, mongoose.Document<unknown, {}, Worker> & Worker & {
    _id: mongoose.Types.ObjectId;
}>;
