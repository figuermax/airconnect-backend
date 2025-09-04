import { IsInt, IsNotEmpty } from 'class-validator';

export class crearReservaDto {
  @IsInt()
  vueloId: number;

  @IsInt()
  pasajeroId: number;

  @IsNotEmpty()
  fechaReserva: Date;
}