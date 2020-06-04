//1
//Dos formas: notación punto o con la notación array:
libro.titulo; // Modelado de Software
libro['paginas']; // 64
//Con la notación array, podemos acceder a las propiedades con variables. 
var propiedad = "autor";
libro[propiedad]; // "Jaime Suasnabar"


//2
// Dos formas: notación punto o con la notación array:
libro.precio = 25;
libro['publicado'] = true;

//3
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
// Definir un objeto
var juan = new Persona("Juan", 24); 
// Estamos creando una nueva persona llamada "Juan" 
// (que fue el primer parametro, y su edad, el segundo)


//4
// Declaración de clase
class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
}

const p = new Rectangle();


// Expresiones de clase
let Rectangulo = class {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  };
  
  console.log(Rectangulo.name);
  // salida: "Rectangulo"


  class 

Rectangulo {
  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
     return this.calcArea();
   }
  // Método
  calcArea () {
    return this.alto * this.ancho;
  }
}
const cuadrado = new Rectangulo (10, 10);
console.log(cuadrado.area); // 100 


class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2)); 
  // 7.0710678118654755


  //Subclases con extends
  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    hablar() {
      console.log(this.nombre + ' hace un ruido.');
    }
  }
  class Perro extends Animal {
    hablar() {
      console.log(this.nombre + ' ladra.');
    }
  }


  //8
  class Gato {
    constructor(nombre) {
      this.nombre = nombre;
    }
    hablar() {
      console.log(this.nombre + ' hace ruido.');
    }
  }
  class Leon extends Gato {
    hablar() {
      super.hablar();
      console.log(this.nombre + ' maulla.');
    }
  }


  //
  var calculatorMixin = Base => class extends Base {
    calc() { }
  };
  
  var randomizerMixin = Base => class extends Base {
    randomize() { }
  };
  
  Una clase que use este método puede ser escrita tal que así:
  
  class Foo { }
  class Bar extends calculatorMixin(randomizerMixin(Foo)) { }


  lculatorMixin(randomizerMixin(Foo)) { }

// Superclass
class Foo { }
// Subclass
class Bar extends Foo {}

//Introduzcamos ahora un mixin entre ambas:
// Mixin
class M {}
// Subclass of Foo-with-M
class Bar extends Foo with M {}


let number = 4;
const saludar = () => "¡Hola!";
const goodbye = () => "¡Adiós!";
class Clase {
}

export { number };                          // Se crea un módulo y se añade number
export { saludar, goodbye as despedir };    // Se añade saludar y despedir al módulo
export { Clase as default };                // Se añade Clase al módulo (default)
export { saludar as otroNombre };           // Se añade otroNombre al módulo


export const f1 = () => 42;                       // Se crea un módulo y se añade f1
export default function f2() { return "Manz"; };  // Se añade f2 al módulo (default)

<script type="module" src="file.mjs"></script>



// Incorrecto
import { elemento } from 'module.mjs';
import { elemento } from 'folder/module.mjs';

// Correcto
import { elemento } from './module.mjs';    // misma carpeta del .js
import { elemento } from '/module.mjs';     // carpeta raíz
import { elemento } from '../module.mjs';   // carpeta anterior al .js
import { ceil } from 'https://unpkg.com/lodash-es@4.17.11/lodash.js';