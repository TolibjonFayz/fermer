import { Injectable } from '@nestjs/common';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Feeding } from './schemas/feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class FeedingService {
  constructor(
    @InjectModel(Feeding.name) private FeedingModel: Model<Feeding>,
  ) {}

  //Create feeding
  async create(createFeedingDto: CreateFeedingDto) {
    const newFeeding = await this.FeedingModel.create(createFeedingDto);
    return newFeeding;
  }

  async findAll() {
    const feedings = await this.FeedingModel.find({}).populate(
      'animal_id worker_id',
    );
    if (feedings.length > 0) return feedings;
    else return 'Ant feeding not found';
  }

  async findOne(id: string) {
    const feeding = await this.FeedingModel.findById(id).populate(
      'animal_id worker_id',
    );
    if (feeding) return feeding;
    else return 'Feeding not found at this id';
  }

  async update(id: string, updateFeedingDto: UpdateFeedingDto) {
    const updating = await this.FeedingModel.findByIdAndUpdate(
      id,
      updateFeedingDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'Updating not found at this ID or smt wrong';
  }

  async remove(id: string) {
    const deleting = await this.FeedingModel.findByIdAndDelete(id);
    if (deleting) return deleting;
    else return 'Feeding not found at this ID or smt wrong';
  }
}
