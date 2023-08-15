import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
import { Worker } from '../../worker/schemas/worker.schema';
export type RecordOIDocument = HydratedDocument<RecordOI>;
export declare class RecordOI {
    animal_id: Animal;
    worker_id: Worker;
    ilness_type: string;
    date_disease: string;
    medicines: string;
    date_treatment: string;
    illness_photo: string;
}
export declare const RecordOISchema: mongoose.Schema<RecordOI, mongoose.Model<RecordOI, any, any, any, mongoose.Document<unknown, any, RecordOI> & RecordOI & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, RecordOI, mongoose.Document<unknown, {}, RecordOI> & RecordOI & {
    _id: mongoose.Types.ObjectId;
}>;
