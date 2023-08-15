import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Speciality } from './schemas/speciality.schema';
import { Model } from 'mongoose';

@Injectable()
export class SpecialityService {
  constructor(
    @InjectModel(Speciality.name) private SpecialityModel: Model<Speciality>,
  ) {}

  //Create speciality
  async create(createSpecialityDto: CreateSpecialityDto) {
    const newSpeciality = await this.SpecialityModel.create(
      createSpecialityDto,
      );
    return newSpeciality;
  }

  //FindAll speciality
  async findAll() {
    return await this.SpecialityModel.find({}).populate('workers');
  }

  //Find speciality by id
  async findOne(id: string) {
    return await this.SpecialityModel.findById(id).exec();
  }

  //Update speciality by id
  async update(id: string, updateSpecialityDto: UpdateSpecialityDto) {
    const existingSpeciality = await this.SpecialityModel.findByIdAndUpdate(
      id,
      updateSpecialityDto,
      { new: true },
    ).exec();

    if (!existingSpeciality) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    return existingSpeciality;
  }

  //Delete speciality by id
  async remove(id: string) {
    const spec = await this.SpecialityModel.findByIdAndDelete(id);
    if (spec) return spec;
    else return 'Speciality not found at this id';
  }
}
