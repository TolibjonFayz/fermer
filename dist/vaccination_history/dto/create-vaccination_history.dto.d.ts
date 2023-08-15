import mongoose from 'mongoose';
export declare class CreateVaccinationHistoryDto {
    animal_id: mongoose.Schema.Types.ObjectId;
    vaccine_id: mongoose.Schema.Types.ObjectId;
    worker_id: mongoose.Schema.Types.ObjectId;
    vaccinated_date: string;
    next_vaccination_date: string;
    vaccination_photo: string;
}
