import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
import { AeropuertoService } from './aeropuertos.service';
import { Aeropuerto } from 'src/entities/aeropuerto.entity';
import { crearAeropuertoDto } from 'src/dto/crear-aeropuerto.dto';


@Controller('aeropuertos')
export class AeropuertoController {
  constructor(private readonly aeropuertoService: AeropuertoService) {}

  @Get()
  obtenerTodos(): Aeropuerto[] {
    return this.aeropuertoService.obtenerTodos();
  }

  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number): Aeropuerto {
    return this.aeropuertoService.obtenerPorId(id);
  }

  @Post()
  crear(@Body() createDto: crearAeropuertoDto): Aeropuerto {
    return this.aeropuertoService.crear(createDto);
  }
}