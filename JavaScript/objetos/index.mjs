//node --experimental-modules modulos
import { Persona } from "./Persona.mjs";
import { Docente } from "./Docentes.mjs";
import { Estudiante } from "./Estudiantes.mjs";
import { Padre } from "./Padres.mjs";

// Mostrar datos de Docentes
const persona1 = new Persona("20100144", "Jaime", "Lima 120", "Huanayo");
console.log(persona1.dni, persona1.nombre, persona1.direccion, persona1.ciudad );
persona1.hablar();

// Mostrar datos docente
const docente1 = new Docente("20100144", "Jaime", "Ica 450", "Junin","Ingeniero", 15);
console.log(docente1.dni, docente1.nombre, docente1.profesion, docente1.tiempoexp );
docente1.hablar();

// Mostrar datos estudiante
const estudiante1 = new Estudiante("20111144", "Luis", "Los Robles 455", "Tambo","Sistemas", 2018);
console.log(estudiante1.dni, estudiante1.nombre, estudiante1.carrera, estudiante1.anoingreso );
estudiante1.hablar();
// Mostrar datos Padre
const padre1 = new Padre("20777771144", "Carlos", "Los Rosales 4575", "Tambo","Sistemas", 2018);
console.log(padre1.dni, padre1.nombre, padre1.casado, padre1.nrohijos );
padre1.hablar();

