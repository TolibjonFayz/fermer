import { Injectable } from '@nestjs/common';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fiber_production } from './schemas/fiber_production.entity';
import { Model } from 'mongoose';

@Injectable()
export class FiberProductionService {
  constructor(
    @InjectModel(Fiber_production.name)
    private Fiber_productionModel: Model<Fiber_production>,
  ) {}

  //Create FiberProduction
  async create(createFiberProductionDto: CreateFiberProductionDto) {
    const newFiber = await this.Fiber_productionModel.create(
      createFiberProductionDto,
    );
    return newFiber;
  }

  //Get all fiber products
  async findAll() {
    const fibers = await this.Fiber_productionModel.find({}).populate(
      'animal_id',
    );
    if (fibers.length > 0) return fibers;
    else return 'Any fiber product not found';
  }

  //Get fiber product by id
  async findOne(id: string) {
    const fiber = await this.Fiber_productionModel.findById(id).populate(
      'animal_id',
    );
    if (fiber) return fiber;
    else return 'Fiber not found at this ID';
  }

  //Update fiber product by id
  async update(id: string, updateFiberProductionDto: UpdateFiberProductionDto) {
    const updating = await this.Fiber_productionModel.findByIdAndUpdate(
      id,
      updateFiberProductionDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'Fiber product not found at this ID';
  }

  //Delete fiber product by id
  async remove(id: string) {
    const deleting = await this.Fiber_productionModel.findByIdAndDelete(id);
    if (deleting) return deleting;
    else return 'Fiber product not found at this ID';
  }
}
