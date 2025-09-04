import { IsString, IsNotEmpty, Length } from 'class-validator';
export class crearAeropuertoDto{
  @IsString()
  @IsNotEmpty()
  @Length(3, 3, { message: 'El código debe tener exactamente 3 caracteres' })
  codigo: string;
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsString()
  @IsNotEmpty()
  ciudad: string;
}