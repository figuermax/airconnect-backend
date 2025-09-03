import { Module } from '@nestjs/common';
import { AeropuertoController } from './aeropuertos.controller';
import { AeropuertoService } from './aeropuertos.service';

@Module({
    controllers: [AeropuertoController],
    providers: [AeropuertoService]
})
export class AeropuertosModule {}
