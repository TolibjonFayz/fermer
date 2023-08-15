"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaccinationHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const vaccination_history_service_1 = require("./vaccination_history.service");
const vaccination_history_controller_1 = require("./vaccination_history.controller");
const mongoose_1 = require("@nestjs/mongoose");
const vaccination_history_schema_1 = require("./schemas/vaccination_history.schema");
let VaccinationHistoryModule = exports.VaccinationHistoryModule = class VaccinationHistoryModule {
};
exports.VaccinationHistoryModule = VaccinationHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: vaccination_history_schema_1.VaccinationH.name, schema: vaccination_history_schema_1.VaccinationHSchema },
            ]),
        ],
        controllers: [vaccination_history_controller_1.VaccinationHistoryController],
        providers: [vaccination_history_service_1.VaccinationHistoryService],
    })
], VaccinationHistoryModule);
//# sourceMappingURL=vaccination_history.module.js.map