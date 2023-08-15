"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const admin_module_1 = require("./admin/admin.module");
const speciality_module_1 = require("./speciality/speciality.module");
const worker_module_1 = require("./worker/worker.module");
const blocks_module_1 = require("./blocks/blocks.module");
const animal_type_module_1 = require("./animal_type/animal_type.module");
const animals_module_1 = require("./animals/animals.module");
const info_module_1 = require("./info/info.module");
const feeding_module_1 = require("./feeding/feeding.module");
const records_of_feeding_module_1 = require("./records_of_feeding/records_of_feeding.module");
const vaccine_module_1 = require("./vaccine/vaccine.module");
const vaccination_history_module_1 = require("./vaccination_history/vaccination_history.module");
const record_of_ilness_module_1 = require("./record_of_ilness/record_of_ilness.module");
const fiber_production_module_1 = require("./fiber_production/fiber_production.module");
const milk_production_module_1 = require("./milk_production/milk_production.module");
const meat_production_module_1 = require("./meat_production/meat_production.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI),
            admin_module_1.AdminModule,
            speciality_module_1.SpecialityModule,
            worker_module_1.WorkerModule,
            blocks_module_1.BlocksModule,
            animal_type_module_1.AnimalTypeModule,
            animals_module_1.AnimalsModule,
            info_module_1.InfoModule,
            feeding_module_1.FeedingModule,
            records_of_feeding_module_1.RecordsOfFeedingModule,
            vaccine_module_1.VaccineModule,
            vaccination_history_module_1.VaccinationHistoryModule,
            record_of_ilness_module_1.RecordOfIlnessModule,
            fiber_production_module_1.FiberProductionModule,
            milk_production_module_1.MilkProductionModule,
            meat_production_module_1.MeatProductionModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map