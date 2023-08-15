import { Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalType } from './schemas/animal_type.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectModel(AnimalType.name) private AnimalTypeModel: Model<AnimalType>,
  ) {}

  //Create animalType
  async create(createAnimalTypeDto: CreateAnimalTypeDto) {
    const newAnimalType = await this.AnimalTypeModel.create(
      createAnimalTypeDto,
    );
    return newAnimalType;
  }

  async findAll() {
    const animal_types = await this.AnimalTypeModel.find({});
    if (animal_types) return animal_types;
    else return 'Any animal types not found';
  }

  async findOne(id: string) {
    const animal_type = await this.AnimalTypeModel.findById(id);
    if (animal_type) return animal_type;
    else return 'Any animal type not found at this id';
  }

  async update(id: string, updateAnimalTypeDto: UpdateAnimalTypeDto) {
    const updating = await this.AnimalTypeModel.findByIdAndUpdate(
      id,
      updateAnimalTypeDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'Animal type not found at this id ';
  }

  async remove(id: string) {
    const deleting = await this.AnimalTypeModel.findByIdAndDelete(id);
    if (deleting) return deleting;
    else return 'Animal type not found at this id';
  }
}
