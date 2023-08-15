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
exports.RecordsOfFeedingController = void 0;
const common_1 = require("@nestjs/common");
const records_of_feeding_service_1 = require("./records_of_feeding.service");
const create_records_of_feeding_dto_1 = require("./dto/create-records_of_feeding.dto");
const update_records_of_feeding_dto_1 = require("./dto/update-records_of_feeding.dto");
let RecordsOfFeedingController = exports.RecordsOfFeedingController = class RecordsOfFeedingController {
    constructor(recordsOfFeedingService) {
        this.recordsOfFeedingService = recordsOfFeedingService;
    }
    create(createRecordsOfFeedingDto) {
        return this.recordsOfFeedingService.create(createRecordsOfFeedingDto);
    }
    findAll() {
        return this.recordsOfFeedingService.findAll();
    }
    findOne(id) {
        return this.recordsOfFeedingService.findOne(id);
    }
    update(id, updateRecordsOfFeedingDto) {
        return this.recordsOfFeedingService.update(id, updateRecordsOfFeedingDto);
    }
    remove(id) {
        return this.recordsOfFeedingService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_records_of_feeding_dto_1.CreateRecordsOfFeedingDto]),
    __metadata("design:returntype", void 0)
], RecordsOfFeedingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecordsOfFeedingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordsOfFeedingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_records_of_feeding_dto_1.UpdateRecordsOfFeedingDto]),
    __metadata("design:returntype", void 0)
], RecordsOfFeedingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordsOfFeedingController.prototype, "remove", null);
exports.RecordsOfFeedingController = RecordsOfFeedingController = __decorate([
    (0, common_1.Controller)('records-of-feeding'),
    __metadata("design:paramtypes", [records_of_feeding_service_1.RecordsOfFeedingService])
], RecordsOfFeedingController);
//# sourceMappingURL=records_of_feeding.controller.js.map