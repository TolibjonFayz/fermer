"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkProductionModule = void 0;
const common_1 = require("@nestjs/common");
const milk_production_service_1 = require("./milk_production.service");
const milk_production_controller_1 = require("./milk_production.controller");
const mongoose_1 = require("@nestjs/mongoose");
const milk_production_schema_1 = require("./schemas/milk_production.schema");
let MilkProductionModule = exports.MilkProductionModule = class MilkProductionModule {
};
exports.MilkProductionModule = MilkProductionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: milk_production_schema_1.MilkProduction.name, schema: milk_production_schema_1.MilkProductionSchema },
            ]),
        ],
        controllers: [milk_production_controller_1.MilkProductionController],
        providers: [milk_production_service_1.MilkProductionService],
    })
], MilkProductionModule);
//# sourceMappingURL=milk_production.module.js.map