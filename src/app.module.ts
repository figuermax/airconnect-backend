import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosModule } from './vuelos/vuelos.module';

import { AeropuertosModule } from './aeropuertos/aeropuertos.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';

@Module({


  imports: [VuelosModule,AeropuertosModule,PasajerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
