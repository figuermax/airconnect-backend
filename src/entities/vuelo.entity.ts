import { aeropuerto } from "./aeropuerto.entity";

export class vuelo{


    id:number;
    numeroVuelo:string;
    fechaSalida:Date;
    duracionEstimada:number;
    origen:aeropuerto;
    destino:aeropuerto;
    estado:string;

    constructor(id:number,
    numeroVuelo:string,
    fechaSalida:Date,
    duracionEstimada:number,
    origen:aeropuerto,
    destino:aeropuerto,
    estado:string){
        this.id=id;
        this.numeroVuelo=numeroVuelo,
        this.fechaSalida=fechaSalida,
        this.duracionEstimada=duracionEstimada,
        this.origen=origen,
        this.destino=destino,
        this.estado=estado
        
    }

}