import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Block } from './schemas/block.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlocksService {
  constructor(@InjectModel(Block.name) private BlockModel: Model<Block>) {}

  //Create block
  async create(createBlockDto: CreateBlockDto) {
    const newBlock = await this.BlockModel.create(createBlockDto);
    return newBlock;
  }

  //Get all blocks
  async findAll() {
    const blocks = await this.BlockModel.find({}).populate('info');
    if (blocks.length > 0) return blocks;
    else return 'Any blocks not found';
  }

  //Get a block by id
  async findOne(id: string) {
    const block = await this.BlockModel.findById(id);
    if (block) return block;
    else return 'Block not found at this id';
  }

  //Update a block by id
  async update(id: string, updateBlockDto: UpdateBlockDto) {
    const block = await this.BlockModel.findByIdAndUpdate(id, updateBlockDto, {
      new: true,
    }).exec();

    if (!block) {
      throw new NotFoundException(`Block #${id} not found`);
    }
    return block;
  }

  //Delete a block by id
  async remove(id: string) {
    const deleteBlock = await this.BlockModel.findByIdAndDelete(id);
    if (deleteBlock) return deleteBlock;
    else return 'Block not found at this id';
  }
}
