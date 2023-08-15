"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordOfIlnessModule = void 0;
const common_1 = require("@nestjs/common");
const record_of_ilness_service_1 = require("./record_of_ilness.service");
const record_of_ilness_controller_1 = require("./record_of_ilness.controller");
const mongoose_1 = require("@nestjs/mongoose");
const record_of_ilness_schema_1 = require("./schemas/record_of_ilness.schema");
let RecordOfIlnessModule = exports.RecordOfIlnessModule = class RecordOfIlnessModule {
};
exports.RecordOfIlnessModule = RecordOfIlnessModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: record_of_ilness_schema_1.RecordOI.name, schema: record_of_ilness_schema_1.RecordOISchema },
            ]),
        ],
        controllers: [record_of_ilness_controller_1.RecordOfIlnessController],
        providers: [record_of_ilness_service_1.RecordOfIlnessService],
    })
], RecordOfIlnessModule);
//# sourceMappingURL=record_of_ilness.module.js.map