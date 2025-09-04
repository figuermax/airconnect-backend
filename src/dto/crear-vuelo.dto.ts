import { IsString, Length } from "class-validator";
import { Aeropuerto } from "src/entities/aeropuerto.entity";

export class crearVueloDto{
    numeroVuelo:number;
    fechaSalida:Date;
    duracionEstimada:number;
    @IsString()
    @Length(3, 3, { message: 'El código de origen debe tener 3 caracteres' })
    origen: string;
    @IsString()
    @Length(3, 3, { message: 'El código de destino debe tener 3 caracteres' })
    @IsString()
    destino: string;
    @IsString()
    estado:string;
}