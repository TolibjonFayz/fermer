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
exports.SpecialityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const speciality_schema_1 = require("./schemas/speciality.schema");
const mongoose_2 = require("mongoose");
let SpecialityService = exports.SpecialityService = class SpecialityService {
    constructor(SpecialityModel) {
        this.SpecialityModel = SpecialityModel;
    }
    async create(createSpecialityDto) {
        const newSpeciality = await this.SpecialityModel.create(createSpecialityDto);
        return newSpeciality;
    }
    async findAll() {
        return await this.SpecialityModel.find({}).populate('workers');
    }
    async findOne(id) {
        return await this.SpecialityModel.findById(id).exec();
    }
    async update(id, updateSpecialityDto) {
        const existingSpeciality = await this.SpecialityModel.findByIdAndUpdate(id, updateSpecialityDto, { new: true }).exec();
        if (!existingSpeciality) {
            throw new common_1.NotFoundException(`Admin #${id} not found`);
        }
        return existingSpeciality;
    }
    async remove(id) {
        const spec = await this.SpecialityModel.findByIdAndDelete(id);
        if (spec)
            return spec;
        else
            return 'Speciality not found at this id';
    }
};
exports.SpecialityService = SpecialityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(speciality_schema_1.Speciality.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SpecialityService);
//# sourceMappingURL=speciality.service.js.map