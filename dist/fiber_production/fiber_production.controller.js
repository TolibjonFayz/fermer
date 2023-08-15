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
exports.FiberProductionController = void 0;
const common_1 = require("@nestjs/common");
const fiber_production_service_1 = require("./fiber_production.service");
const create_fiber_production_dto_1 = require("./dto/create-fiber_production.dto");
const update_fiber_production_dto_1 = require("./dto/update-fiber_production.dto");
let FiberProductionController = exports.FiberProductionController = class FiberProductionController {
    constructor(fiberProductionService) {
        this.fiberProductionService = fiberProductionService;
    }
    create(createFiberProductionDto) {
        return this.fiberProductionService.create(createFiberProductionDto);
    }
    findAll() {
        return this.fiberProductionService.findAll();
    }
    findOne(id) {
        return this.fiberProductionService.findOne(id);
    }
    update(id, updateFiberProductionDto) {
        return this.fiberProductionService.update(id, updateFiberProductionDto);
    }
    remove(id) {
        return this.fiberProductionService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fiber_production_dto_1.CreateFiberProductionDto]),
    __metadata("design:returntype", void 0)
], FiberProductionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FiberProductionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiberProductionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fiber_production_dto_1.UpdateFiberProductionDto]),
    __metadata("design:returntype", void 0)
], FiberProductionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiberProductionController.prototype, "remove", null);
exports.FiberProductionController = FiberProductionController = __decorate([
    (0, common_1.Controller)('fiber-production'),
    __metadata("design:paramtypes", [fiber_production_service_1.FiberProductionService])
], FiberProductionController);
//# sourceMappingURL=fiber_production.controller.js.map