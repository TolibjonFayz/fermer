import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimalDocument = HydratedDocument<Animal>;

@Schema({ versionKey: false })
export class Animal {
  @Prop({ required: true })
  animal_type_id: number;

  @Prop({ required: true })
  photos: string;

  @Prop({ required: true })
  unique_id: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
