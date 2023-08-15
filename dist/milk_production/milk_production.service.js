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
exports.MilkProductionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const milk_production_schema_1 = require("./schemas/milk_production.schema");
const mongoose_2 = require("mongoose");
let MilkProductionService = exports.MilkProductionService = class MilkProductionService {
    constructor(MilkProductionModel) {
        this.MilkProductionModel = MilkProductionModel;
    }
    async create(createMilkProductionDto) {
        const newMilkProduct = await this.MilkProductionModel.create(createMilkProductionDto);
        return newMilkProduct;
    }
    async findAll() {
        const milkProducts = await this.MilkProductionModel.find().populate('animal_id');
        if (milkProducts.length > 0)
            return milkProducts;
        else
            return 'Any MilkProduct not found';
    }
    async findOne(id) {
        const milkProduct = await this.MilkProductionModel.findByIdAndUpdate(id).populate('animal_id');
        if (milkProduct)
            return milkProduct;
        else
            return 'Milk product not found at this ID';
    }
    async update(id, updateMilkProductionDto) {
        const updating = await this.MilkProductionModel.findByIdAndUpdate(id, updateMilkProductionDto, { new: true });
        if (updating)
            return updating;
        else
            return 'Milk product not found at this ID';
    }
    async remove(id) {
        const deleting = await this.MilkProductionModel.findByIdAndDelete(id);
        if (deleting)
            return deleting;
        else
            return 'Milk product not found at this ID';
    }
};
exports.MilkProductionService = MilkProductionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(milk_production_schema_1.MilkProduction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MilkProductionService);
//# sourceMappingURL=milk_production.service.js.map