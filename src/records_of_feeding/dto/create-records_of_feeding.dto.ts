import mongoose from 'mongoose';

export class CreateRecordsOfFeedingDto {
  date: string;
  consumption: string;
  feeding_id: mongoose.Schema.Types.ObjectId;
}
