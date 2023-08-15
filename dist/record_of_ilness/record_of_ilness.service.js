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
exports.RecordOfIlnessService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const record_of_ilness_schema_1 = require("./schemas/record_of_ilness.schema");
const mongoose_2 = require("mongoose");
let RecordOfIlnessService = exports.RecordOfIlnessService = class RecordOfIlnessService {
    constructor(RecordIOModel) {
        this.RecordIOModel = RecordIOModel;
    }
    async create(createRecordOfIlnessDto) {
        const newRecordOI = await this.RecordIOModel.create(createRecordOfIlnessDto);
        return newRecordOI;
    }
    async findAll() {
        const recordOIs = await this.RecordIOModel.find({}).populate('animal_id worker_id');
        if (recordOIs.length > 0)
            return recordOIs;
        else
            return 'Any records of illness not found';
    }
    async findOne(id) {
        const recordOI = (await this.RecordIOModel.findById(id)).populate('animal_id worker_id');
        if (recordOI)
            return recordOI;
        else
            return 'Reocrd of illness not found at this id';
    }
    async update(id, updateRecordOfIlnessDto) {
        const updating = await this.RecordIOModel.findByIdAndUpdate(id, updateRecordOfIlnessDto, { new: true });
        if (updating)
            return updating;
        else
            return 'RecordOI not found at this ID';
    }
    async remove(id) {
        const deleting = await this.RecordIOModel.findByIdAndDelete(id);
        if (deleting)
            return deleting;
        else
            return 'Record of illness not found at this id';
    }
};
exports.RecordOfIlnessService = RecordOfIlnessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(record_of_ilness_schema_1.RecordOI.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecordOfIlnessService);
//# sourceMappingURL=record_of_ilness.service.js.map