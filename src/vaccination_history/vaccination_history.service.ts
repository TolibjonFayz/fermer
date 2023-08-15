import { Injectable } from '@nestjs/common';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VaccinationH } from './schemas/vaccination_history.schema';
import { Model } from 'mongoose';

@Injectable()
export class VaccinationHistoryService {
  constructor(
    @InjectModel(VaccinationH.name)
    private VaccinationHMmodel: Model<VaccinationH>,
  ) {}

  //Create VaccinationH
  async create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    const newVaccinationH = await this.VaccinationHMmodel.create(
      createVaccinationHistoryDto,
    );
    return newVaccinationH;
  }

  //Get all vaccationH
  async findAll() {
    const VaccinationHs = await this.VaccinationHMmodel.find({}).populate(
      'animal_id vaccine_id worker_id',
    );
    if (VaccinationHs.length > 0) return VaccinationHs;
    else return 'Any VaccinationHistory not found';
  }

  //Get vaccationH by id
  async findOne(id: string) {
    const vaccationH = await this.VaccinationHMmodel.findById(id).populate(
      'animal_id vaccine_id worker_id',
    );
    if (vaccationH) return vaccationH;
    else return 'VaccationHistory not found at this id';
  }

  async update(
    id: string,
    updateVaccinationHistoryDto: UpdateVaccinationHistoryDto,
  ) {
    const updating = await this.VaccinationHMmodel.findByIdAndUpdate(
      id,
      updateVaccinationHistoryDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'VaccationH not found at this id';
  }

  async remove(id: string) {
    const removing = await this.VaccinationHMmodel.findByIdAndDelete(id);
    if (removing) return removing;
    else return 'VaccationHistory not found at this id';
  }
}
