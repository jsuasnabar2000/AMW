import { Persona } from "./Persona.mjs";
export class Docente extends Persona{
    constructor(dni, nombre, direccion, ciudad, profesion, tiempoexp){
        super(dni, nombre, direccion, ciudad);
        this.profesion=profesion;
        this.tiempoexp=tiempoexp;
    }
    nombre(){
        return this.nombre;
    }
    // f1(nombre){
    //     this.nombre=nombre;
    // }
    hablar(){
        console.log(`Docente mi nombre es: ${this.nombre} con DNI ${this.dni} soy ${this.profesion} con ${this.tiempoexp} años`);
    }
}

