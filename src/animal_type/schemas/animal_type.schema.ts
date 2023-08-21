import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type AnimalTypeDocument = HydratedDocument<AnimalType>;

@Schema({ versionKey: false })
export class AnimalType {
  @Prop({ required: true })
  @ApiProperty({ example: 'Sut emizuvchi', description: 'Hayvon  turi' })
  type_name: string;

  @ApiProperty({
    example: 'Anabunaqa, manabunaqa',
    description: 'Ta`rif',
  })
  @Prop({ required: true })
  description: string;
}

export const AnimalTypeSchema = SchemaFactory.createForClass(AnimalType);
