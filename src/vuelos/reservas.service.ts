import { Injectable, NotFoundException } from '@nestjs/common';
import { crearReservaDto } from 'src/dto/crear-reserva.dto';

import { PasajerosService } from 'src/pasajeros/pasajeros.service';
import { VueloService } from './vuelos.service';
import { reserva } from 'src/entities/reserva.entity';

@Injectable()
export class ReservasService {
  private reservas: reserva[] = [];
  private idCounter = 1;

  constructor(
    private readonly vueloService: VueloService,
    private readonly pasajerosService: PasajerosService,
  ) {}

  crearReserva(dto: crearReservaDto): reserva {
 
    try {
      this.vueloService.obtenerPorId(dto.vueloId);
    } catch (error) {
      throw new NotFoundException(`Vuelo con id ${dto.vueloId} no encontrado.`);
    }


    try {
      this.pasajerosService.getPasajeroById(dto.pasajeroId);
    } catch (error) {
      throw new NotFoundException(`Pasajero con id ${dto.pasajeroId} no encontrado.`);
    }

    
    const reserva: reserva = {
      id: this.idCounter++,
      vuelo: dto.vueloId,
      pasajeroId: dto.pasajeroId,
      fechaReserva: dto.fechaReserva,
    };

    this.reservas.push(reserva);
    return reserva;
  }
}