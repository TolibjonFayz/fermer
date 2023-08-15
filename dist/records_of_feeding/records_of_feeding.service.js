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
exports.RecordsOfFeedingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const records_of_feeding_schema_1 = require("./schemas/records_of_feeding.schema");
const mongoose_2 = require("mongoose");
let RecordsOfFeedingService = exports.RecordsOfFeedingService = class RecordsOfFeedingService {
    constructor(RecordsOFModel) {
        this.RecordsOFModel = RecordsOFModel;
    }
    async create(createRecordsOfFeedingDto) {
        const newRecordsOF = await this.RecordsOFModel.create(createRecordsOfFeedingDto);
        return newRecordsOF;
    }
    async findAll() {
        const recordsOF = await this.RecordsOFModel.find({}).populate('feeding_id');
        if (recordsOF.length > 0)
            return recordsOF;
        else
            return 'Any recordsOF not found';
    }
    async findOne(id) {
        const recordsOF = await this.RecordsOFModel.findById(id);
        if (recordsOF)
            return recordsOF;
        else
            return 'RecordsOF not found at this ID';
    }
    async update(id, updateRecordsOfFeedingDto) {
        const updating = await this.RecordsOFModel.findByIdAndUpdate(id, updateRecordsOfFeedingDto, { new: true });
        if (updating)
            return updating;
        else
            return 'RecordsOF not found at this ID';
    }
    async remove(id) {
        const removing = await this.RecordsOFModel.findByIdAndDelete(id);
        if (removing)
            return removing;
        else
            return 'RecordsOF not found at this ID';
    }
};
exports.RecordsOfFeedingService = RecordsOfFeedingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(records_of_feeding_schema_1.RecordsOF.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecordsOfFeedingService);
//# sourceMappingURL=records_of_feeding.service.js.map