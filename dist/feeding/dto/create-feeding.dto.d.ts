import mongoose from 'mongoose';
export declare class CreateFeedingDto {
    animal_id: mongoose.Schema.Types.ObjectId;
    feeding_schedules: string;
    types_of_feed: string;
    dietary: string;
    worker_id: mongoose.Schema.Types.ObjectId;
}
