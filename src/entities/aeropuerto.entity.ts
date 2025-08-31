export class aeropuerto{
    private static lastId:number=1;
        id:number;
        nombre:string;
        codigo:string;
        ciudad:string;
    constructor(
        id:number,
        nombre:string,
        codigo:string,
        ciudad:string
    ){
        aeropuerto.lastId++;
        this.id=id,
        this.nombre=nombre,
        this.codigo=codigo,
        this.ciudad=ciudad
    }
}