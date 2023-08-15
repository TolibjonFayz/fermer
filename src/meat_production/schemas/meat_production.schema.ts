import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';

export type MeatProductionDocument = HydratedDocument<MeatProduction>;

@Schema({ versionKey: false })
export class MeatProduction {
  @Prop({ required: true })
  meat_yield: string;

  @Prop({ required: true })
  slaughter_date: string;

  @Prop({ required: true })
  shearing_schedule: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
  animal_id: Animal;
}

export const MeatProductionSchema =
  SchemaFactory.createForClass(MeatProduction);
