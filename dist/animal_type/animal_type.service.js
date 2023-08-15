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
exports.AnimalTypeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const animal_type_schema_1 = require("./schemas/animal_type.schema");
const mongoose_2 = require("mongoose");
let AnimalTypeService = exports.AnimalTypeService = class AnimalTypeService {
    constructor(AnimalTypeModel) {
        this.AnimalTypeModel = AnimalTypeModel;
    }
    async create(createAnimalTypeDto) {
        const newAnimalType = await this.AnimalTypeModel.create(createAnimalTypeDto);
        return newAnimalType;
    }
    async findAll() {
        const animal_types = await this.AnimalTypeModel.find({});
        if (animal_types)
            return animal_types;
        else
            return 'Any animal types not found';
    }
    async findOne(id) {
        const animal_type = await this.AnimalTypeModel.findById(id);
        if (animal_type)
            return animal_type;
        else
            return 'Any animal type not found at this id';
    }
    async update(id, updateAnimalTypeDto) {
        const updating = await this.AnimalTypeModel.findByIdAndUpdate(id, updateAnimalTypeDto, { new: true });
        if (updating)
            return updating;
        else
            return 'Animal type not found at this id ';
    }
    async remove(id) {
        const deleting = await this.AnimalTypeModel.findByIdAndDelete(id);
        if (deleting)
            return deleting;
        else
            return 'Animal type not found at this id';
    }
};
exports.AnimalTypeService = AnimalTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(animal_type_schema_1.AnimalType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AnimalTypeService);
//# sourceMappingURL=animal_type.service.js.map