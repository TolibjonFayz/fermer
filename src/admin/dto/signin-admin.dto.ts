import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInAdminDto {
  @ApiProperty({ example: 'falonchiyev@gmail.com', description: 'Emailingiz' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'qwerty', description: 'Parolingiz' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
