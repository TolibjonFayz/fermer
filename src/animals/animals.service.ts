import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './schemas/animal.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private AnimalModel: Model<Animal>) {}

  //Create animalService
  async create(createAnimalDto: CreateAnimalDto) {
    const newAnimal = await this.AnimalModel.create(createAnimalDto);
    console.log(newAnimal);
    return newAnimal;
  }

  async findAll() {
    const animals = await this.AnimalModel.find({});
    if (animals.length > 0) return animals;
    else return 'Any animal not found!!!';
  }

  async findOne(id: string) {
    const animal = await this.AnimalModel.findById(id);
    if (animal) return animal;
    else return 'Animal not found at this id';
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto) {
    const updating = await this.AnimalModel.findByIdAndUpdate(
      id,
      updateAnimalDto,
      { new: true },
    ).exec();
    if (updating) return updating;
    else throw new NotFoundException(`Animal #${id} not found`);
  }

  async remove(id: string) {
    const deleting = await this.AnimalModel.findByIdAndDelete(id);
    if (deleting) return deleting;
    else return 'Animal not found at this id';
  }
}
