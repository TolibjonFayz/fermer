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
exports.InfoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const info_schema_1 = require("./schemas/info.schema");
const mongoose_2 = require("mongoose");
let InfoService = exports.InfoService = class InfoService {
    constructor(InfoModel) {
        this.InfoModel = InfoModel;
    }
    async create(createInfoDto) {
        const newInfo = await this.InfoModel.create(createInfoDto);
        return newInfo;
    }
    async findAll() {
        const info = await this.InfoModel.find({}).populate('block_id animal_id parent_id');
        return info;
    }
    async findOne(id) {
        return `This action returns a #${id} info`;
    }
    async update(id, updateInfoDto) {
        return `This action updates a #${id} info`;
    }
    async remove(id) {
        return `This action removes a #${id} info`;
    }
};
exports.InfoService = InfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(info_schema_1.Info.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InfoService);
//# sourceMappingURL=info.service.js.map