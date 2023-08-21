import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalTypeService } from './animal_type.service';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Animal-type')
@Controller('animal-type')
export class AnimalTypeController {
  constructor(private readonly animalTypeService: AnimalTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create animal-type' })
  create(@Body() createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.animalTypeService.create(createAnimalTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all animal-types' })
  findAll() {
    return this.animalTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get animal-type by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalTypeService.findOne(id);
  }

  @ApiOperation({ summary: 'Update animal-type by id' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimalTypeDto: UpdateAnimalTypeDto,
  ) {
    return this.animalTypeService.update(id, updateAnimalTypeDto);
  }

  @ApiOperation({ summary: 'Delete animal-type by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalTypeService.remove(id);
  }
}
