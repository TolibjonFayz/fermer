import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { SpecialityModule } from './speciality/speciality.module';
import { WorkerModule } from './worker/worker.module';
import { BlocksModule } from './blocks/blocks.module';
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { AnimalsModule } from './animals/animals.module';
import { InfoModule } from './info/info.module';
import { FeedingModule } from './feeding/feeding.module';
import { RecordsOfFeedingModule } from './records_of_feeding/records_of_feeding.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { VaccinationHistoryModule } from './vaccination_history/vaccination_history.module';
import { RecordOfIlnessModule } from './record_of_ilness/record_of_ilness.module';
import { FiberProductionModule } from './fiber_production/fiber_production.module';
import { MilkProductionModule } from './milk_production/milk_production.module';
import { MeatProductionModule } from './meat_production/meat_production.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    SpecialityModule,
    WorkerModule,
    BlocksModule,
    AnimalTypeModule,
    AnimalsModule,
    InfoModule,
    FeedingModule,
    RecordsOfFeedingModule,
    VaccineModule,
    VaccinationHistoryModule,
    RecordOfIlnessModule,
    FiberProductionModule,
    MilkProductionModule,
    MeatProductionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
