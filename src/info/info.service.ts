import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Info } from './schemas/info.schema';
import { Model } from 'mongoose';

@Injectable()
export class InfoService {
  constructor(@InjectModel(Info.name) private InfoModel: Model<Info>) {}

  //Create info
  async create(createInfoDto: CreateInfoDto) {
    const newInfo = await this.InfoModel.create(createInfoDto);
    return newInfo;
  }

  //Get all infos
  async findAll() {
    const info = await this.InfoModel.find({}).populate('block_id animal_id parent_id');
    return info;
  }

  //Get info by id
  async findOne(id: number) {
    return `This action returns a #${id} info`;
  }

  //Update info by id
  async update(id: number, updateInfoDto: UpdateInfoDto) {
    return `This action updates a #${id} info`;
  }

  //Delete info by id
  async remove(id: number) {
    return `This action removes a #${id} info`;
  }
}
