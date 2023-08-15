import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Info } from '../../info/schemas/info.schema';

export type BlockDocument = HydratedDocument<Block>;

@Schema({ versionKey: false })
export class Block {
  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Info' }] })
  info: Info[];
}

export const BlockSchema = SchemaFactory.createForClass(Block);
