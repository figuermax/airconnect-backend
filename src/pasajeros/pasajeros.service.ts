import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { registrarPasajero } from 'src/dto/registrar-pasajero.dto';
import { pasajero } from 'src/entities/pasajero.entity';

@Injectable()
export class PasajerosService {

    private pasajeros: pasajero[]= [];
    private lastId=0;
    registrar(registrardto:registrarPasajero):pasajero{
        
        const existe=this.pasajeros.find(

            a=> a.nombre.toLowerCase()===registrardto.nombre.toLowerCase() && 
        
                a.apellido.toLocaleLowerCase()===registrardto.apellido.toLocaleLowerCase());


        if(existe){
            throw new BadRequestException(`el pasajero ${registrardto.nombre} ${registrardto.apellido} esta registrado`);

        }
         const existeEmail = this.pasajeros.find(
        a => a.email.toLowerCase() === registrardto.email.toLowerCase(),
  );
        if (existeEmail) {
        throw new BadRequestException(
        `El email ${registrardto.email} ya está registrado para otro pasajero.`,
    );
  }
        const regpasajero= new pasajero(
            ++this.lastId,
            registrardto.nombre,
            registrardto.apellido,
            registrardto.email

        );
        this.pasajeros.push(regpasajero);
        return regpasajero;
    }

    getPasajeroById(id:number){
        const pasajeroEncontrado= this.pasajeros.find(p=> p.id=== id);
        if(!pasajeroEncontrado){
            throw new NotFoundException(`Pasajero con id ${id} no encontrado`);

        }
        return pasajeroEncontrado;
        }

    getAllPasajeros(): pasajero[]{
        return this.pasajeros
        }

    eliminarPasajeroById(id:number){
        const index =this.pasajeros.findIndex(p=> p.id===id);
        if(index=== -1){
            throw new NotFoundException(`Pasajero con id ${id} no encontrado`);

        }

        this.pasajeros.splice(index,1);
    }

}
