import { Injectable } from '@nestjs/common';
import { CreateRecordOfIlnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordOI } from './schemas/record_of_ilness.schema';
import { Model } from 'mongoose';
import { ADDRGETNETWORKPARAMS } from 'dns';

@Injectable()
export class RecordOfIlnessService {
  constructor(
    @InjectModel(RecordOI.name) private RecordIOModel: Model<RecordOI>,
  ) {}

  //Create recordIo
  async create(createRecordOfIlnessDto: CreateRecordOfIlnessDto) {
    const newRecordOI = await this.RecordIOModel.create(
      createRecordOfIlnessDto,
    );
    return newRecordOI;
  }

  //Get all recordOI
  async findAll() {
    const recordOIs = await this.RecordIOModel.find({}).populate(
      'animal_id worker_id',
    );
    if (recordOIs.length > 0) return recordOIs;
    else return 'Any records of illness not found';
  }

  //Get recordOI by id
  async findOne(id: string) {
    const recordOI = (await this.RecordIOModel.findById(id)).populate(
      'animal_id worker_id',
    );
    if (recordOI) return recordOI;
    else return 'Reocrd of illness not found at this id';
  }

  //Get recordOI by id
  async update(id: string, updateRecordOfIlnessDto: UpdateRecordOfIlnessDto) {
    const updating = await this.RecordIOModel.findByIdAndUpdate(
      id,
      updateRecordOfIlnessDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'RecordOI not found at this ID';
  }

  async remove(id: string) {
    const deleting = await this.RecordIOModel.findByIdAndDelete(id);
    if (deleting) return deleting;
    else return 'Record of illness not found at this id';
  }
}
