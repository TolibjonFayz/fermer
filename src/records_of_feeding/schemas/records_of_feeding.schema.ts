import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Feeding } from '../../feeding/schemas/feeding.schema';

export type RecordsOFDocument = HydratedDocument<RecordsOF>;

@Schema({ versionKey: false })
export class RecordsOF {
  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  consumption: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Feeding' })
  feeding_id: Feeding;
}

export const RecordsOFSchema = SchemaFactory.createForClass(RecordsOF);
