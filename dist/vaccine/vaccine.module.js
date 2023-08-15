"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaccineModule = void 0;
const common_1 = require("@nestjs/common");
const vaccine_service_1 = require("./vaccine.service");
const vaccine_controller_1 = require("./vaccine.controller");
const mongoose_1 = require("@nestjs/mongoose");
const vaccine_schema_1 = require("./schemas/vaccine.schema");
let VaccineModule = exports.VaccineModule = class VaccineModule {
};
exports.VaccineModule = VaccineModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: vaccine_schema_1.Vaccine.name, schema: vaccine_schema_1.VaccineSchema }]),
        ],
        controllers: [vaccine_controller_1.VaccineController],
        providers: [vaccine_service_1.VaccineService],
    })
], VaccineModule);
//# sourceMappingURL=vaccine.module.js.map