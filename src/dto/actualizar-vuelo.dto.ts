import { IsString, IsNotEmpty } from 'class-validator';
export class actualizarEstadoVueloDto {
  @IsString()
  @IsNotEmpty()
  estado: string;
}
