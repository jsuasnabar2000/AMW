import { Persona } from "./Persona.mjs";
export class Estudiante extends Persona{
    constructor(dni, nombre, direccion, ciudad, carrera, anoingreso){
        super(dni, nombre, direccion, ciudad);
        this.carrera=carrera;
        this.anoingreso=anoingreso;
    }
    // get nombre(){
    //     return this.nombre;
    // }
    // set nombre(nombre){
    //     this.nombre=nombre
    // }
    hablar(){
        console.log(`Estudiante mi nombre es: ${this.nombre} con DNI ${this.dni} ingrese el ${this.anoingreso} carrera ${this.carrera}`);
    }
}