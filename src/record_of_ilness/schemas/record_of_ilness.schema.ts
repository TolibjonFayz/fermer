import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
import { Worker } from '../../worker/schemas/worker.schema';

export type RecordOIDocument = HydratedDocument<RecordOI>;

@Schema({ versionKey: false })
export class RecordOI {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
  animal_id: Animal;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  worker_id: Worker;

  @Prop({ required: true })
  ilness_type: string;

  @Prop({ required: true })
  date_disease: string;

  @Prop({ required: true })
  medicines: string;

  @Prop({ required: true })
  date_treatment: string;

  @Prop({ required: true })
  illness_photo: string;
}

export const RecordOISchema = SchemaFactory.createForClass(RecordOI);
