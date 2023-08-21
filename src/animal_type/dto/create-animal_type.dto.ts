import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalTypeDto {
  @ApiProperty({ example: 'Sut emizuvchi', description: 'Hayvon  turi' })
  type_name: string;

  @ApiProperty({
    example: 'Anabunaqa, manabunaqa',
    description: 'Ta`rif',
  })
  description: string;
}
