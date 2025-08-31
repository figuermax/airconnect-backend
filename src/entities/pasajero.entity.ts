export class pasajero{
    private static lastId:number=1;
    id:number;
    nombre:string;
    apellido:string;
    email:string;
    constructor(id:number, nombre:string, apellido:string, email:string)
    {

        pasajero.lastId=1;
        this.id=id;
        this.nombre;
        this.apellido;
        this.email;

    }
}