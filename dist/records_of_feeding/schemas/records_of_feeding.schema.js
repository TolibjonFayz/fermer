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
exports.RecordsOFSchema = exports.RecordsOF = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const feeding_schema_1 = require("../../feeding/schemas/feeding.schema");
let RecordsOF = exports.RecordsOF = class RecordsOF {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], RecordsOF.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], RecordsOF.prototype, "consumption", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Feeding' }),
    __metadata("design:type", feeding_schema_1.Feeding)
], RecordsOF.prototype, "feeding_id", void 0);
exports.RecordsOF = RecordsOF = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], RecordsOF);
exports.RecordsOFSchema = mongoose_1.SchemaFactory.createForClass(RecordsOF);
//# sourceMappingURL=records_of_feeding.schema.js.map