import { IsEmail, IsNotEmpty, IsString} from "class-validator";

export class registrarPasajero{
    @IsString()
    @IsNotEmpty()
    nombre:string;
    @IsString()
    @IsNotEmpty()
    apellido:string;
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;
    numeroVuelo: string;

}