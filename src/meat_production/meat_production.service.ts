import { Injectable } from '@nestjs/common';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { MeatProduction } from './schemas/meat_production.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MeatProductionService {
  constructor(
    @InjectModel(MeatProduction.name)
    private MeatProductionModel: Model<MeatProduction>,
  ) {}

  //Create meatProduction
  async create(createMeatProductionDto: CreateMeatProductionDto) {
    const newMeatProduction = await this.MeatProductionModel.create(
      createMeatProductionDto,
    );
    return newMeatProduction;
  }

  //Get all meatProducts
  async findAll() {
    const meatProducts = await this.MeatProductionModel.find({}).populate(
      'animal_id',
    );
    if (meatProducts.length > 0) return meatProducts;
    else return 'Any meat product not found...';
  }

  //Get meatProduct by id
  async findOne(id: string) {
    const meatProduct = await this.MeatProductionModel.findById(id).populate(
      'animal_id',
    );
    if (meatProduct) return meatProduct;
    else return 'Meat product not found at this ID';
  }

  //Update meatProduct by id
  async update(id: string, updateMeatProductionDto: UpdateMeatProductionDto) {
    const updating = await this.MeatProductionModel.findByIdAndUpdate(
      id,
      updateMeatProductionDto,
      { new: true },
    );
    if (updating) return updating;
    else return 'Meat product not found at this ID';
  }

  //Delete meatProduct by id
  async remove(id: string) {
    const deleting = await this.MeatProductionModel.findByIdAndDelete(id);
    if (deleting) return deleting;
    else return 'Meat product not found at this ID';
  }
}
