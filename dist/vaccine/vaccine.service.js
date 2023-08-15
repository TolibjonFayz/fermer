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
exports.VaccineService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const vaccine_schema_1 = require("./schemas/vaccine.schema");
const mongoose_2 = require("mongoose");
let VaccineService = exports.VaccineService = class VaccineService {
    constructor(VaccineModel) {
        this.VaccineModel = VaccineModel;
    }
    async create(createVaccineDto) {
        const newVaccine = await this.VaccineModel.create(createVaccineDto);
        return newVaccine;
    }
    async findAll() {
        const vaccines = await this.VaccineModel.find({});
        if (vaccines.length > 0)
            return vaccines;
        else
            return 'Any vaccine not found';
    }
    async findOne(id) {
        const vaccine = await this.VaccineModel.findById(id);
        if (vaccine)
            return vaccine;
        else
            return 'Vaccine not found at this ID';
    }
    async update(id, updateVaccineDto) {
        const updating = await this.VaccineModel.findByIdAndUpdate(id, updateVaccineDto, { new: true });
        if (updating)
            return updating;
        else
            return 'Vaccine not found at this ID';
    }
    async remove(id) {
        const deleting = await this.VaccineModel.findByIdAndDelete(id);
        if (deleting)
            return deleting;
        else
            return 'Vaccine not found at this ID or smt wrong';
    }
};
exports.VaccineService = VaccineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(vaccine_schema_1.Vaccine.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VaccineService);
//# sourceMappingURL=vaccine.service.js.map