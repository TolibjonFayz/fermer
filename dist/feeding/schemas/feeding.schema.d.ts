import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
import { Worker } from '../../worker/schemas/worker.schema';
export type FeedingDocument = HydratedDocument<Feeding>;
export declare class Feeding {
    animal_id: Animal;
    feeding_schedules: string;
    types_of_feed: string;
    dietary: string;
    worker_id: Worker;
}
export declare const FeedingSchema: mongoose.Schema<Feeding, mongoose.Model<Feeding, any, any, any, mongoose.Document<unknown, any, Feeding> & Feeding & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Feeding, mongoose.Document<unknown, {}, Feeding> & Feeding & {
    _id: mongoose.Types.ObjectId;
}>;
