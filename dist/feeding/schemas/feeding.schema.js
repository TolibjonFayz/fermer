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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedingSchema = exports.Feeding = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const animal_schema_1 = require("../../animals/schemas/animal.schema");
const worker_schema_1 = require("../../worker/schemas/worker.schema");
let Feeding = exports.Feeding = class Feeding {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Animal' }),
    __metadata("design:type", animal_schema_1.Animal)
], Feeding.prototype, "animal_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Feeding.prototype, "feeding_schedules", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Feeding.prototype, "types_of_feed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Feeding.prototype, "dietary", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Worker' }),
    __metadata("design:type", worker_schema_1.Worker)
], Feeding.prototype, "worker_id", void 0);
exports.Feeding = Feeding = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], Feeding);
exports.FeedingSchema = mongoose_1.SchemaFactory.createForClass(Feeding);
//# sourceMappingURL=feeding.schema.js.map