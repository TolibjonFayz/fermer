import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';
import { Vaccine } from '../../vaccine/schemas/vaccine.schema';
import { Worker } from '../../worker/schemas/worker.schema';

export type VaccinationHDocument = HydratedDocument<VaccinationH>;

@Schema({ versionKey: false })
export class VaccinationH {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
  animal_id: Animal;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vaccine' })
  vaccine_id: Vaccine;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  worker_id: Worker;

  @Prop({ required: true })
  vaccinated_date: string;

  @Prop({ required: true })
  next_vaccination_date: string;

  @Prop({ required: true })
  vaccination_photo: string;
}

export const VaccinationHSchema = SchemaFactory.createForClass(VaccinationH);
