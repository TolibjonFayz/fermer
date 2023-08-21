import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateAdminDto {
  @ApiProperty({ example: 'Falonchiyev Palonchis', description: 'Ism Sharif' })
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @ApiProperty({ example: 'falonchiyev@gmail.com', description: 'Emailingiz' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+998901234567', description: 'Raqamingiz' })
  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @ApiProperty({
    example: 'https://t.me/falonchi',
    description: 'Telegram akkauntiz',
  })
  @IsNotEmpty()
  @IsString()
  tg_link: string;

  @ApiProperty({ example: 'qwerty', description: 'Parolingiz' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ example: 'qwerty', description: 'Tasdiqlash parolingiz' })
  @IsNotEmpty()
  @IsString()
  confirm_password: string;

  @ApiProperty({
    example: 'Men kimdizman, nimdadir qilaman',
    description: 'O`ziz haqizda smt...',
  })
  @IsString()
  description: string;
}
