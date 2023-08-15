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
exports.VaccinationHSchema = exports.VaccinationH = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const animal_schema_1 = require("../../animals/schemas/animal.schema");
const vaccine_schema_1 = require("../../vaccine/schemas/vaccine.schema");
const worker_schema_1 = require("../../worker/schemas/worker.schema");
let VaccinationH = exports.VaccinationH = class VaccinationH {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Animal' }),
    __metadata("design:type", animal_schema_1.Animal)
], VaccinationH.prototype, "animal_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Vaccine' }),
    __metadata("design:type", vaccine_schema_1.Vaccine)
], VaccinationH.prototype, "vaccine_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Worker' }),
    __metadata("design:type", worker_schema_1.Worker)
], VaccinationH.prototype, "worker_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VaccinationH.prototype, "vaccinated_date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VaccinationH.prototype, "next_vaccination_date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VaccinationH.prototype, "vaccination_photo", void 0);
exports.VaccinationH = VaccinationH = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], VaccinationH);
exports.VaccinationHSchema = mongoose_1.SchemaFactory.createForClass(VaccinationH);
//# sourceMappingURL=vaccination_history.schema.js.map