import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { registrarPasajero } from 'src/dto/registrar-pasajero.dto';
import { pasajero } from 'src/entities/pasajero.entity';

@Controller('pasajeros')
export class PasajerosController {

    constructor (private readonly pasajeroService:PasajerosService){}

    @Post('registrar')
    RegistrarPasajero(@Body() registrardto:registrarPasajero):pasajero{
        return this.pasajeroService.registrar(registrardto)
    }

    @Get(':id')
    getPasajeroById(@Param('id',ParseIntPipe)id:number):pasajero{
        return this.getPasajeroById(id);
    }


    @Get()
    getAll(){
        return this.pasajeroService.getAllPasajeros();
    }
    

    @Delete(':id')
    eliminar(@Param('id',ParseIntPipe)id:number):void{
        this.pasajeroService.eliminarPasajeroById(id);
    }

}
