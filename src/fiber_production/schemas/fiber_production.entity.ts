import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Animal } from '../../animals/schemas/animal.schema';

export type FiberProductionDocument = HydratedDocument<Fiber_production>;

@Schema({ versionKey: false })
export class Fiber_production {
  @Prop({ required: true })
  fiber_yield: string;

  @Prop({ required: true })
  shearing_schedule: string;

  @Prop({ required: true })
  fiber_quality: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
  animal_id: Animal;
}

export const Fiber_productionSchema =
  SchemaFactory.createForClass(Fiber_production);
