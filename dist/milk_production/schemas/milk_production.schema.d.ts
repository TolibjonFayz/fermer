import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
export type MilkProductDocument = HydratedDocument<MilkProduction>;
export declare class MilkProduction {
    milk_yield: string;
    milk_schedule: string;
    milk_quality: string;
    animal_id: Animal;
}
export declare const MilkProductionSchema: mongoose.Schema<MilkProduction, mongoose.Model<MilkProduction, any, any, any, mongoose.Document<unknown, any, MilkProduction> & MilkProduction & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, MilkProduction, mongoose.Document<unknown, {}, MilkProduction> & MilkProduction & {
    _id: mongoose.Types.ObjectId;
}>;
