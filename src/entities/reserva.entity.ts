import { pasajero } from "./pasajero.entity";
import { vuelo } from "./vuelo.entity";

export class reserva{
    private static lastId:number=1;
        id:number;
        codigoReserva:string;
        fechaReserva:Date;
        estado:string[];
        pasajero:pasajero;
        vuelo:vuelo;

        constructor(id:number,
        codigoReserva:string,
        fechaReserva:Date,
        estado:string[],
        pasajero:pasajero,
        vuelo:vuelo)
        {
            reserva.lastId=1;
            this.id=id;
            this.codigoReserva=codigoReserva;
            this.fechaReserva=fechaReserva;
            this.estado=estado;
            this.pasajero=pasajero;
            this.vuelo=vuelo;
        }
}