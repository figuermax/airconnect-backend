import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { crearVueloDto } from 'src/dto/crear-vuelo.dto';
import { vuelo } from 'src/entities/vuelo.entity';
import { AeropuertoService } from 'src/aeropuertos/aeropuertos.service';
import { Aeropuerto } from 'src/entities/aeropuerto.entity';
import { actualizarEstadoVueloDto } from 'src/dto/actualizar-vuelo.dto';

@Injectable()
export class VueloService {
  private vuelos: vuelo[] = [];
  private idCounter = 1; // Contador para id incremental

  constructor(private readonly aeropuertoService: AeropuertoService) {}

  crear(createDto: crearVueloDto): vuelo {
    const origen: Aeropuerto | undefined = this.aeropuertoService.obtenerTodos()
      .find(a => a.codigo.toUpperCase() === createDto.origen.toUpperCase());
    if (!origen) {
      throw new NotFoundException(`Aeropuerto de origen con código ${createDto.origen} no encontrado.`);
    }

    const destino: Aeropuerto | undefined = this.aeropuertoService.obtenerTodos()
      .find(a => a.codigo.toUpperCase() === createDto.destino.toUpperCase());
    if (!destino) {
      throw new NotFoundException(`Aeropuerto de destino con código ${createDto.destino} no encontrado.`);
    }

    if (origen.codigo === destino.codigo) {
      throw new BadRequestException('El aeropuerto de origen y destino no pueden ser el mismo.');
    }

    const nuevoVuelo = new vuelo(
      this.idCounter++, // Asignar id incremental y luego incrementar
      createDto.numeroVuelo.toString(),
      new Date(createDto.fechaSalida),
      createDto.duracionEstimada,
      origen,
      destino,
      createDto.estado,
    );

    this.vuelos.push(nuevoVuelo);
    return nuevoVuelo;
  }

    obtenerPorId(id: number): vuelo {
    const vueloEncontrado = this.vuelos.find(v => v.id === id);
    if (!vueloEncontrado) {
      throw new NotFoundException(`Vuelo con id ${id} no encontrado.`);
    }
    return vueloEncontrado;
  }

      obtenerTodos(filtros?: { origen?: string; estado?: string }): vuelo[] {
    let resultados = this.vuelos;
    if (filtros) {
      if (filtros.origen) {
        const origenUpper = filtros.origen.toUpperCase();
        resultados = resultados.filter(v => v.origen.codigo.toUpperCase() === origenUpper);
      }
      if (filtros.estado) {
        const estadoLower = filtros.estado.toLowerCase();
        resultados = resultados.filter(v => v.estado.toLowerCase() === estadoLower);
      }
    }
    return resultados;
  }

  actualizarEstado(id: number, dto: actualizarEstadoVueloDto): vuelo {
    const vueloEncontrado = this.vuelos.find(v => v.id === id);
    if (!vueloEncontrado) {
      throw new NotFoundException(`Vuelo con id ${id} no encontrado.`);
    }
    vueloEncontrado.estado = dto.estado;
    return vueloEncontrado;
  }

}