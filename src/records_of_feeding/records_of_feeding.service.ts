import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordsOF } from './schemas/records_of_feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordsOfFeedingService {
  constructor(
    @InjectModel(RecordsOF.name) private RecordsOFModel: Model<RecordsOF>,
  ) {}

  //Create recordsOF
  async create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {
    const newRecordsOF = await this.RecordsOFModel.create(
      createRecordsOfFeedingDto,
    );
    return newRecordsOF;
  }

  async findAll() {
    const recordsOF = await this.RecordsOFModel.find({}).populate('feeding_id');
    if (recordsOF.length > 0) return recordsOF;
    else return 'Any recordsOF not found';
  }

  async findOne(id: string) {
    const recordsOF = await this.RecordsOFModel.findById(id);
    if (recordsOF) return recordsOF;
    else return 'RecordsOF not found at this ID';
  }

  async update(
    id: string,
    updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto,
  ) {
    const updating = await this.RecordsOFModel.findByIdAndUpdate(
      id,
      updateRecordsOfFeedingDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'RecordsOF not found at this ID';
  }

  async remove(id: string) {
    const removing = await this.RecordsOFModel.findByIdAndDelete(id);
    if (removing) return removing;
    else return 'RecordsOF not found at this ID';
  }
}
