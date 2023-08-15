"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlocksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const block_schema_1 = require("./schemas/block.schema");
const mongoose_2 = require("mongoose");
let BlocksService = exports.BlocksService = class BlocksService {
    constructor(BlockModel) {
        this.BlockModel = BlockModel;
    }
    async create(createBlockDto) {
        const newBlock = await this.BlockModel.create(createBlockDto);
        return newBlock;
    }
    async findAll() {
        const blocks = await this.BlockModel.find({}).populate('info');
        if (blocks.length > 0)
            return blocks;
        else
            return 'Any blocks not found';
    }
    async findOne(id) {
        const block = await this.BlockModel.findById(id);
        if (block)
            return block;
        else
            return 'Block not found at this id';
    }
    async update(id, updateBlockDto) {
        const block = await this.BlockModel.findByIdAndUpdate(id, updateBlockDto, {
            new: true,
        }).exec();
        if (!block) {
            throw new common_1.NotFoundException(`Block #${id} not found`);
        }
        return block;
    }
    async remove(id) {
        const deleteBlock = await this.BlockModel.findByIdAndDelete(id);
        if (deleteBlock)
            return deleteBlock;
        else
            return 'Block not found at this id';
    }
};
exports.BlocksService = BlocksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(block_schema_1.Block.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlocksService);
//# sourceMappingURL=blocks.service.js.map