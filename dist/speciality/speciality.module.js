"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialityModule = void 0;
const common_1 = require("@nestjs/common");
const speciality_service_1 = require("./speciality.service");
const speciality_controller_1 = require("./speciality.controller");
const mongoose_1 = require("@nestjs/mongoose");
const speciality_schema_1 = require("./schemas/speciality.schema");
let SpecialityModule = exports.SpecialityModule = class SpecialityModule {
};
exports.SpecialityModule = SpecialityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: speciality_schema_1.Speciality.name, schema: speciality_schema_1.SpecialitySchema },
            ]),
        ],
        controllers: [speciality_controller_1.SpecialityController],
        providers: [speciality_service_1.SpecialityService],
    })
], SpecialityModule);
//# sourceMappingURL=speciality.module.js.map