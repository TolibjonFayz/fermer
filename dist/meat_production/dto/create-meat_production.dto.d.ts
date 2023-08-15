import mongoose from 'mongoose';
export declare class CreateMeatProductionDto {
    meat_yield: string;
    slaughter_date: string;
    shearing_schedule: string;
    animal_id: mongoose.Schema.Types.ObjectId;
}
