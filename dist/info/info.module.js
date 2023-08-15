"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoModule = void 0;
const common_1 = require("@nestjs/common");
const info_service_1 = require("./info.service");
const info_controller_1 = require("./info.controller");
const mongoose_1 = require("@nestjs/mongoose");
const info_schema_1 = require("./schemas/info.schema");
let InfoModule = exports.InfoModule = class InfoModule {
};
exports.InfoModule = InfoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: info_schema_1.Info.name, schema: info_schema_1.InfoSchema }]),
        ],
        controllers: [info_controller_1.InfoController],
        providers: [info_service_1.InfoService],
    })
], InfoModule);
//# sourceMappingURL=info.module.js.map