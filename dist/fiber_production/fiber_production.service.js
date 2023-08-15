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
exports.FiberProductionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const fiber_production_entity_1 = require("./schemas/fiber_production.entity");
const mongoose_2 = require("mongoose");
let FiberProductionService = exports.FiberProductionService = class FiberProductionService {
    constructor(Fiber_productionModel) {
        this.Fiber_productionModel = Fiber_productionModel;
    }
    async create(createFiberProductionDto) {
        const newFiber = await this.Fiber_productionModel.create(createFiberProductionDto);
        return newFiber;
    }
    async findAll() {
        const fibers = await this.Fiber_productionModel.find({}).populate('animal_id');
        if (fibers.length > 0)
            return fibers;
        else
            return 'Any fiber product not found';
    }
    async findOne(id) {
        const fiber = await this.Fiber_productionModel.findById(id).populate('animal_id');
        if (fiber)
            return fiber;
        else
            return 'Fiber not found at this ID';
    }
    async update(id, updateFiberProductionDto) {
        const updating = await this.Fiber_productionModel.findByIdAndUpdate(id, updateFiberProductionDto, { new: true });
        if (updating)
            return updating;
        else
            return 'Fiber product not found at this ID';
    }
    async remove(id) {
        const deleting = await this.Fiber_productionModel.findByIdAndDelete(id);
        if (deleting)
            return deleting;
        else
            return 'Fiber product not found at this ID';
    }
};
exports.FiberProductionService = FiberProductionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(fiber_production_entity_1.Fiber_production.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FiberProductionService);
//# sourceMappingURL=fiber_production.service.js.map