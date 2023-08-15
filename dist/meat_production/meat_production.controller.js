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
exports.MeatProductionController = void 0;
const common_1 = require("@nestjs/common");
const meat_production_service_1 = require("./meat_production.service");
const create_meat_production_dto_1 = require("./dto/create-meat_production.dto");
const update_meat_production_dto_1 = require("./dto/update-meat_production.dto");
let MeatProductionController = exports.MeatProductionController = class MeatProductionController {
    constructor(meatProductionService) {
        this.meatProductionService = meatProductionService;
    }
    create(createMeatProductionDto) {
        return this.meatProductionService.create(createMeatProductionDto);
    }
    findAll() {
        return this.meatProductionService.findAll();
    }
    findOne(id) {
        return this.meatProductionService.findOne(id);
    }
    update(id, updateMeatProductionDto) {
        return this.meatProductionService.update(id, updateMeatProductionDto);
    }
    remove(id) {
        return this.meatProductionService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_meat_production_dto_1.CreateMeatProductionDto]),
    __metadata("design:returntype", void 0)
], MeatProductionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MeatProductionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeatProductionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_meat_production_dto_1.UpdateMeatProductionDto]),
    __metadata("design:returntype", void 0)
], MeatProductionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MeatProductionController.prototype, "remove", null);
exports.MeatProductionController = MeatProductionController = __decorate([
    (0, common_1.Controller)('meat-production'),
    __metadata("design:paramtypes", [meat_production_service_1.MeatProductionService])
], MeatProductionController);
//# sourceMappingURL=meat_production.controller.js.map