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
exports.MilkProductionController = void 0;
const common_1 = require("@nestjs/common");
const milk_production_service_1 = require("./milk_production.service");
const create_milk_production_dto_1 = require("./dto/create-milk_production.dto");
const update_milk_production_dto_1 = require("./dto/update-milk_production.dto");
let MilkProductionController = exports.MilkProductionController = class MilkProductionController {
    constructor(milkProductionService) {
        this.milkProductionService = milkProductionService;
    }
    create(createMilkProductionDto) {
        return this.milkProductionService.create(createMilkProductionDto);
    }
    findAll() {
        return this.milkProductionService.findAll();
    }
    findOne(id) {
        return this.milkProductionService.findOne(id);
    }
    update(id, updateMilkProductionDto) {
        return this.milkProductionService.update(id, updateMilkProductionDto);
    }
    remove(id) {
        return this.milkProductionService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_milk_production_dto_1.CreateMilkProductionDto]),
    __metadata("design:returntype", void 0)
], MilkProductionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MilkProductionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MilkProductionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_milk_production_dto_1.UpdateMilkProductionDto]),
    __metadata("design:returntype", void 0)
], MilkProductionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MilkProductionController.prototype, "remove", null);
exports.MilkProductionController = MilkProductionController = __decorate([
    (0, common_1.Controller)('milk-production'),
    __metadata("design:paramtypes", [milk_production_service_1.MilkProductionService])
], MilkProductionController);
//# sourceMappingURL=milk_production.controller.js.map