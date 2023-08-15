import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
export type MeatProductionDocument = HydratedDocument<MeatProduction>;
export declare class MeatProduction {
    meat_yield: string;
    slaughter_date: string;
    shearing_schedule: string;
    animal_id: Animal;
}
export declare const MeatProductionSchema: mongoose.Schema<MeatProduction, mongoose.Model<MeatProduction, any, any, any, mongoose.Document<unknown, any, MeatProduction> & MeatProduction & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, MeatProduction, mongoose.Document<unknown, {}, MeatProduction> & MeatProduction & {
    _id: mongoose.Types.ObjectId;
}>;
