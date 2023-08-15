import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
import { Vaccine } from '../../vaccine/schemas/vaccine.schema';
import { Worker } from '../../worker/schemas/worker.schema';
export type VaccinationHDocument = HydratedDocument<VaccinationH>;
export declare class VaccinationH {
    animal_id: Animal;
    vaccine_id: Vaccine;
    worker_id: Worker;
    vaccinated_date: string;
    next_vaccination_date: string;
    vaccination_photo: string;
}
export declare const VaccinationHSchema: mongoose.Schema<VaccinationH, mongoose.Model<VaccinationH, any, any, any, mongoose.Document<unknown, any, VaccinationH> & VaccinationH & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, VaccinationH, mongoose.Document<unknown, {}, VaccinationH> & VaccinationH & {
    _id: mongoose.Types.ObjectId;
}>;
