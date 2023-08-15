"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsOfFeedingModule = void 0;
const common_1 = require("@nestjs/common");
const records_of_feeding_service_1 = require("./records_of_feeding.service");
const records_of_feeding_controller_1 = require("./records_of_feeding.controller");
const mongoose_1 = require("@nestjs/mongoose");
const records_of_feeding_schema_1 = require("./schemas/records_of_feeding.schema");
let RecordsOfFeedingModule = exports.RecordsOfFeedingModule = class RecordsOfFeedingModule {
};
exports.RecordsOfFeedingModule = RecordsOfFeedingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: records_of_feeding_schema_1.RecordsOF.name, schema: records_of_feeding_schema_1.RecordsOFSchema },
            ]),
        ],
        controllers: [records_of_feeding_controller_1.RecordsOfFeedingController],
        providers: [records_of_feeding_service_1.RecordsOfFeedingService],
    })
], RecordsOfFeedingModule);
//# sourceMappingURL=records_of_feeding.module.js.map