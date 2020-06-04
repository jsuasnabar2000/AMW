import { Persona } from "./Persona.mjs";
export class Padre extends Persona{
    constructor(dni, nombre, direccion, ciudad, nrohijos, casado){
        super(dni, nombre, direccion, ciudad);
        this.nrohijos=nrohijos;
        this.casado=casado;
    }
    // get nombre(){
    //     return this.nombre;
    // }
    // set nombre(nombre){
    //     this.nombre=nombre
    // }
    hablar(){
        console.log(`Padre: mi nombre es: ${this.nombre} con DNI ${this.dni} soy ${this.casado} con ${this.nrohijos} hijos`);
    }
}