import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema({ versionKey: false })
export class Admin {
  @ApiProperty({ example: 'Falonchiyev Palonchis', description: 'Ism Sharif' })
  @Prop({ required: true })
  full_name: string;

  @ApiProperty({ example: 'falonchiyev@gmail.com', description: 'Emailingiz' })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ example: '+998901234567', description: 'Raqamingiz' })
  @Prop()
  phone_number: string;

  @ApiProperty({
    example: 'https://t.me/falonchi',
    description: 'Telegram akkauntiz',
  })
  @Prop()
  tg_link: string;

  @ApiProperty({ example: 'qwerty', description: 'Parolingiz' })
  @Prop()
  hashed_token: string;

  @ApiProperty({ example: 'true', description: 'Activemi' })
  @Prop({ default: false })
  is_active: boolean;

  @Prop({ default: false })
  is_creator: boolean;

  @ApiProperty({
    example: 'Men kimdizman, nimdadir qilaman',
    description: 'O`ziz haqizda smt...',
  })
  @Prop()
  description: string;

  @ApiProperty({
    example: 'jadnfsvasinoirvn',
    description: 'Password',
  })
  @Prop()
  hashed_password: string;

  @Prop()
  activation_link: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
