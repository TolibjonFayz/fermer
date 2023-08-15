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
exports.RecordOfIlnessController = void 0;
const common_1 = require("@nestjs/common");
const record_of_ilness_service_1 = require("./record_of_ilness.service");
const create_record_of_ilness_dto_1 = require("./dto/create-record_of_ilness.dto");
const update_record_of_ilness_dto_1 = require("./dto/update-record_of_ilness.dto");
let RecordOfIlnessController = exports.RecordOfIlnessController = class RecordOfIlnessController {
    constructor(recordOfIlnessService) {
        this.recordOfIlnessService = recordOfIlnessService;
    }
    create(createRecordOfIlnessDto) {
        return this.recordOfIlnessService.create(createRecordOfIlnessDto);
    }
    findAll() {
        return this.recordOfIlnessService.findAll();
    }
    findOne(id) {
        return this.recordOfIlnessService.findOne(id);
    }
    update(id, updateRecordOfIlnessDto) {
        return this.recordOfIlnessService.update(id, updateRecordOfIlnessDto);
    }
    remove(id) {
        return this.recordOfIlnessService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_record_of_ilness_dto_1.CreateRecordOfIlnessDto]),
    __metadata("design:returntype", void 0)
], RecordOfIlnessController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecordOfIlnessController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordOfIlnessController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_record_of_ilness_dto_1.UpdateRecordOfIlnessDto]),
    __metadata("design:returntype", void 0)
], RecordOfIlnessController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordOfIlnessController.prototype, "remove", null);
exports.RecordOfIlnessController = RecordOfIlnessController = __decorate([
    (0, common_1.Controller)('record-of-ilness'),
    __metadata("design:paramtypes", [record_of_ilness_service_1.RecordOfIlnessService])
], RecordOfIlnessController);
//# sourceMappingURL=record_of_ilness.controller.js.map