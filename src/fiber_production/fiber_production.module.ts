import { Module } from '@nestjs/common';
import { FiberProductionService } from './fiber_production.service';
import { FiberProductionController } from './fiber_production.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Fiber_production,
  Fiber_productionSchema,
} from './schemas/fiber_production.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Fiber_production.name, schema: Fiber_productionSchema },
    ]),
  ],
  controllers: [FiberProductionController],
  providers: [FiberProductionService],
})
export class FiberProductionModule {}
