import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { crearAeropuertoDto } from 'src/dto/crear-aeropuerto.dto';
import { Aeropuerto } from 'src/entities/aeropuerto.entity';


@Injectable()
export class AeropuertoService {
  private aeropuertos: Aeropuerto[] = [];

  crear(createDto: crearAeropuertoDto): Aeropuerto {
    const existe = this.aeropuertos.find(
      a => a.codigo.toLowerCase() === createDto.codigo.toLowerCase(),
    );
    if (existe) {
      throw new BadRequestException(`El aeropuerto con código ${createDto.codigo} ya existe.`);
    }

    const aeropuerto = new Aeropuerto(
      createDto.nombre,
      createDto.codigo.toUpperCase(),
      createDto.ciudad,
    );
    this.aeropuertos.push(aeropuerto);
    return aeropuerto;
  }

  obtenerPorId(id: number): Aeropuerto {
    const aeropuerto = this.aeropuertos.find(a => a.id === id);
    if (!aeropuerto) {
      throw new NotFoundException(`Aeropuerto con id ${id} no encontrado.`);
    }
    return aeropuerto;
  }

  obtenerTodos(): Aeropuerto[] {
    return this.aeropuertos;
  }
}