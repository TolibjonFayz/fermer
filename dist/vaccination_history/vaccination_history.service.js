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
exports.VaccinationHistoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const vaccination_history_schema_1 = require("./schemas/vaccination_history.schema");
const mongoose_2 = require("mongoose");
let VaccinationHistoryService = exports.VaccinationHistoryService = class VaccinationHistoryService {
    constructor(VaccinationHMmodel) {
        this.VaccinationHMmodel = VaccinationHMmodel;
    }
    async create(createVaccinationHistoryDto) {
        const newVaccinationH = await this.VaccinationHMmodel.create(createVaccinationHistoryDto);
        return newVaccinationH;
    }
    async findAll() {
        const VaccinationHs = await this.VaccinationHMmodel.find({}).populate('animal_id vaccine_id worker_id');
        if (VaccinationHs.length > 0)
            return VaccinationHs;
        else
            return 'Any VaccinationHistory not found';
    }
    async findOne(id) {
        const vaccationH = await this.VaccinationHMmodel.findById(id).populate('animal_id vaccine_id worker_id');
        if (vaccationH)
            return vaccationH;
        else
            return 'VaccationHistory not found at this id';
    }
    async update(id, updateVaccinationHistoryDto) {
        const updating = await this.VaccinationHMmodel.findByIdAndUpdate(id, updateVaccinationHistoryDto, { new: true });
        if (updating)
            return updating;
        else
            return 'VaccationH not found at this id';
    }
    async remove(id) {
        const removing = await this.VaccinationHMmodel.findByIdAndDelete(id);
        if (removing)
            return removing;
        else
            return 'VaccationHistory not found at this id';
    }
};
exports.VaccinationHistoryService = VaccinationHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(vaccination_history_schema_1.VaccinationH.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VaccinationHistoryService);
//# sourceMappingURL=vaccination_history.service.js.map