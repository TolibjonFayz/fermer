"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerModule = void 0;
const common_1 = require("@nestjs/common");
const worker_service_1 = require("./worker.service");
const worker_controller_1 = require("./worker.controller");
const mongoose_1 = require("@nestjs/mongoose");
const worker_schema_1 = require("./schemas/worker.schema");
const speciality_schema_1 = require("../speciality/schemas/speciality.schema");
let WorkerModule = exports.WorkerModule = class WorkerModule {
};
exports.WorkerModule = WorkerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: worker_schema_1.Worker.name, schema: worker_schema_1.WorkerSchema },
                { name: speciality_schema_1.Speciality.name, schema: speciality_schema_1.SpecialitySchema },
            ]),
        ],
        controllers: [worker_controller_1.WorkerController],
        providers: [worker_service_1.WorkerService],
    })
], WorkerModule);
//# sourceMappingURL=worker.module.js.map