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
exports.MeatProductionSchema = exports.MeatProduction = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const animal_schema_1 = require("../../animals/schemas/animal.schema");
let MeatProduction = exports.MeatProduction = class MeatProduction {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MeatProduction.prototype, "meat_yield", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MeatProduction.prototype, "slaughter_date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MeatProduction.prototype, "shearing_schedule", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Animal' }),
    __metadata("design:type", animal_schema_1.Animal)
], MeatProduction.prototype, "animal_id", void 0);
exports.MeatProduction = MeatProduction = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], MeatProduction);
exports.MeatProductionSchema = mongoose_1.SchemaFactory.createForClass(MeatProduction);
//# sourceMappingURL=meat_production.schema.js.map