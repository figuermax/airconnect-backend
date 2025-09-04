import { Module } from '@nestjs/common';
import { PasajerosController } from './pasajeros.controller';
import { PasajerosService } from './pasajeros.service';

@Module({
  controllers: [PasajerosController],
  providers: [PasajerosService]
})
export class PasajerosModule {}
