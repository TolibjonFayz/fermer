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
exports.MeatProductionService = void 0;
const common_1 = require("@nestjs/common");
const meat_production_schema_1 = require("./schemas/meat_production.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MeatProductionService = exports.MeatProductionService = class MeatProductionService {
    constructor(MeatProductionModel) {
        this.MeatProductionModel = MeatProductionModel;
    }
    async create(createMeatProductionDto) {
        const newMeatProduction = await this.MeatProductionModel.create(createMeatProductionDto);
        return newMeatProduction;
    }
    async findAll() {
        const meatProducts = await this.MeatProductionModel.find({}).populate('animal_id');
        if (meatProducts.length > 0)
            return meatProducts;
        else
            return 'Any meat product not found...';
    }
    async findOne(id) {
        const meatProduct = await this.MeatProductionModel.findById(id).populate('animal_id');
        if (meatProduct)
            return meatProduct;
        else
            return 'Meat product not found at this ID';
    }
    async update(id, updateMeatProductionDto) {
        const updating = await this.MeatProductionModel.findByIdAndUpdate(id, updateMeatProductionDto, { new: true });
        if (updating)
            return updating;
        else
            return 'Meat product not found at this ID';
    }
    async remove(id) {
        const deleting = await this.MeatProductionModel.findByIdAndDelete(id);
        if (deleting)
            return deleting;
        else
            return 'Meat product not found at this ID';
    }
};
exports.MeatProductionService = MeatProductionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(meat_production_schema_1.MeatProduction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MeatProductionService);
//# sourceMappingURL=meat_production.service.js.map