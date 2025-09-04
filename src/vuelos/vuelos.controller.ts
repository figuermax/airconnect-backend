import { Controller, Post, Body, Get, Param, ParseIntPipe, Query, Patch } from '@nestjs/common';
import { crearVueloDto } from 'src/dto/crear-vuelo.dto';
import { vuelo } from 'src/entities/vuelo.entity';
import { VueloService } from './vuelos.service';
import { actualizarEstadoVueloDto } from 'src/dto/actualizar-vuelo.dto';

@Controller('vuelos')
export class VueloController {
  constructor(private readonly vueloService: VueloService) {}

  @Post()
  crear(@Body() createDto: crearVueloDto): vuelo {
    return this.vueloService.crear(createDto);
  }

  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number): vuelo {
    return this.vueloService.obtenerPorId(id);
  }

  @Get()
  obtenerTodos(
    @Query('origen') origen?: string,
    @Query('estado') estado?: string,
  ): vuelo[] {
    return this.vueloService.obtenerTodos({ origen, estado });
  }

   @Patch(':id/estado')
  actualizarEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: actualizarEstadoVueloDto,
  ): vuelo {
    return this.vueloService.actualizarEstado(id, dto);
  }
}