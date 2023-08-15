import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
export type FiberProductionDocument = HydratedDocument<Fiber_production>;
export declare class Fiber_production {
    fiber_yield: string;
    shearing_schedule: string;
    fiber_quality: string;
    animal_id: Animal;
}
export declare const Fiber_productionSchema: mongoose.Schema<Fiber_production, mongoose.Model<Fiber_production, any, any, any, mongoose.Document<unknown, any, Fiber_production> & Fiber_production & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Fiber_production, mongoose.Document<unknown, {}, Fiber_production> & Fiber_production & {
    _id: mongoose.Types.ObjectId;
}>;
