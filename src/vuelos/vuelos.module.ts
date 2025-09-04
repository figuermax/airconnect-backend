import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';
import { Aeropuerto } from 'src/entities/aeropuerto.entity';

@Module({
  imports:[Aeropuerto],
  controllers: [VuelosController],
  providers: [VuelosService]
})
export class VuelosModule {}
