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
exports.FeedingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const feeding_schema_1 = require("./schemas/feeding.schema");
const mongoose_2 = require("mongoose");
let FeedingService = exports.FeedingService = class FeedingService {
    constructor(FeedingModel) {
        this.FeedingModel = FeedingModel;
    }
    async create(createFeedingDto) {
        const newFeeding = await this.FeedingModel.create(createFeedingDto);
        return newFeeding;
    }
    async findAll() {
        const feedings = await this.FeedingModel.find({}).populate('animal_id worker_id');
        if (feedings.length > 0)
            return feedings;
        else
            return 'Ant feeding not found';
    }
    async findOne(id) {
        const feeding = await this.FeedingModel.findById(id).populate('animal_id worker_id');
        if (feeding)
            return feeding;
        else
            return 'Feeding not found at this id';
    }
    async update(id, updateFeedingDto) {
        const updating = await this.FeedingModel.findByIdAndUpdate(id, updateFeedingDto, { new: true });
        if (updating)
            return updating;
        else
            return 'Updating not found at this ID or smt wrong';
    }
    async remove(id) {
        const deleting = await this.FeedingModel.findByIdAndDelete(id);
        if (deleting)
            return deleting;
        else
            return 'Feeding not found at this ID or smt wrong';
    }
};
exports.FeedingService = FeedingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(feeding_schema_1.Feeding.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FeedingService);
//# sourceMappingURL=feeding.service.js.map