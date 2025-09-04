import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ReservasService } from './reservas.service';
@Controller('vuelos/reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}
}