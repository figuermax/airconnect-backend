import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosModule } from './vuelos/vuelos.module';

import { AeropuertosModule } from './aeropuertos/aeropuertos.module';

@Module({
<<<<<<< HEAD
  imports: [VuelosModule],
=======
  imports: [AeropuertosModule],
>>>>>>> feature_aeropuertos
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
