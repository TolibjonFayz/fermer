import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MilkProduction } from './schemas/milk_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class MilkProductionService {
  constructor(
    @InjectModel(MilkProduction.name)
    private MilkProductionModel: Model<MilkProduction>,
  ) {}

  //Create Milk Product
  async create(createMilkProductionDto: CreateMilkProductionDto) {
    const newMilkProduct = await this.MilkProductionModel.create(
      createMilkProductionDto,
    );
    return newMilkProduct;
  }

  async findAll() {
    const milkProducts = await this.MilkProductionModel.find().populate(
      'animal_id',
    );
    if (milkProducts.length > 0) return milkProducts;
    else return 'Any MilkProduct not found';
  }

  async findOne(id: string) {
    const milkProduct = await this.MilkProductionModel.findByIdAndUpdate(
      id,
    ).populate('animal_id');
    if (milkProduct) return milkProduct;
    else return 'Milk product not found at this ID';
  }

  async update(id: string, updateMilkProductionDto: UpdateMilkProductionDto) {
    const updating = await this.MilkProductionModel.findByIdAndUpdate(
      id,
      updateMilkProductionDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'Milk product not found at this ID';
  }

  async remove(id: string) {
    const deleting = await this.MilkProductionModel.findByIdAndDelete(id);
    if (deleting) return deleting;
    else return 'Milk product not found at this ID';
  }
}
