class Persona5{
    protected nombre:string;
    protected edad: number;
    constructor (nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimiri(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Empleado extends Persona5{
    private sueldo:number;
    constructor(nom:string, edad:number, sueldo:number){
        super(nom,edad);
        this.sueldo=sueldo;
    }
    imprimir() {
        super.imprimiri();
        console.log(`Sueldo: ${this.sueldo}`)
    }
}
