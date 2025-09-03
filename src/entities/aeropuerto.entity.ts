export class Aeropuerto{
    private static lastId:number=0;
        id:number;
        nombre:string;
        codigo:string;
        ciudad:string;
    constructor(
        nombre:string,
        codigo:string,
        ciudad:string
    ){
        Aeropuerto.lastId++;
        this.id=Aeropuerto.lastId,
        this.nombre=nombre,
        this.codigo=codigo,
        this.ciudad=ciudad
    }
}