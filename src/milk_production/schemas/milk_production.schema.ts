import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';

export type MilkProductDocument = HydratedDocument<MilkProduction>;

@Schema({ versionKey: false })
export class MilkProduction {
  @Prop({ required: true })
  milk_yield: string;

  @Prop({ required: true })
  milk_schedule: string;

  @Prop({ required: true })
  milk_quality: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
  animal_id: Animal;
}

export const MilkProductionSchema =
  SchemaFactory.createForClass(MilkProduction);
