// Declaracion de clases
// class Rectangulo {
//     constructor(alto, ancho){
//         this.alto=alto;
//         this.ancho=ancho;
//     };
// };
// const p = new Rectangulo(45,12);
// console.log(p.alto);

// Expresiones de clases

// let Rectangulo=class{
//     constructor(alto, ancho){
//         this.alto=alto;
//         this.ancho=ancho;
//     }
// }

// console.log(Rectangulo.name);

// Metodos prototipo

class Rectangulo{
    constructor(alto, ancho){
        this.alto=alto;
        this.ancho=alto;
    }
    //Getter
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.alto*this.ancho;
    }
}

const cuadrado=new Rectangulo(10, 10);
console.log(cuadrado.area);
