import { Injectable } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vaccine } from './schemas/vaccine.schema';
import { Model } from 'mongoose';

@Injectable()
export class VaccineService {
  constructor(
    @InjectModel(Vaccine.name) private VaccineModel: Model<Vaccine>,
  ) {}

  //Create vaccine
  async create(createVaccineDto: CreateVaccineDto) {
    const newVaccine = await this.VaccineModel.create(createVaccineDto);
    return newVaccine;
  }

  async findAll() {
    const vaccines = await this.VaccineModel.find({});
    if (vaccines.length > 0) return vaccines;
    else return 'Any vaccine not found';
  }

  async findOne(id: string) {
    const vaccine = await this.VaccineModel.findById(id);
    if (vaccine) return vaccine;
    else return 'Vaccine not found at this ID';
  }

  async update(id: string, updateVaccineDto: UpdateVaccineDto) {
    const updating = await this.VaccineModel.findByIdAndUpdate(
      id,
      updateVaccineDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'Vaccine not found at this ID';
  }

  async remove(id: string) {
    const deleting = await this.VaccineModel.findByIdAndDelete(id);
    if (deleting) return deleting;
    else return 'Vaccine not found at this ID or smt wrong';
  }
}
