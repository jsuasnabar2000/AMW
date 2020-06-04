export class Persona{
    constructor(dni, nombre, direccion, ciudad){
        this.dni=dni;
        this.nombre=nombre;
        this.direccion=direccion;
        this.ciudad=ciudad;
    }
    hablar(){
        console.log(`Persona mi nombre es: ${this.nombre} con DNI ${this.dni} mi direccion ${this.direccion} de ${this.ciudad}`);
    }
}
