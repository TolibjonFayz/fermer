import mongoose from 'mongoose';
export declare class CreateRecordsOfFeedingDto {
    date: string;
    consumption: string;
    feeding_id: mongoose.Schema.Types.ObjectId;
}
