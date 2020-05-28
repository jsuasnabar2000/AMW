//FUNCIONES CON NOMBRE
/*function add(a, b){
    return a+b;
};
function subtract(a, b){
    return a-b;
};
function multiply(a, b){
    return a*b;
};
function divide(a, b){
    if(b==0){
        return "No se puede dividir por 0";
    }else{
        return a/b;
    }
};
console.log(add(45,12));
console.log(subtract(45,12));
console.log(multiply(15,45));
console.log(divide(15,45));
*/
// FUNCIONES SIN NOMBRE O COMO EXPRESIONES
// var add=function(a, b){ return a+b; };
// var subtract=function(a, b){ return a-b; };
// var multiply=function(a, b){ return a*b; };
// var divide=function(a, b){
//     if(b==0){
//         return "No se puede dividir por 0";
//     }else{
//         return a/b;
//     }
// };
// console.log(add(45,12));
// console.log(subtract(45,12));
// console.log(multiply(15,45));
// console.log(divide(15,45));

// OBJETOS ARGUMENTS
// var x=(function sumar(){
//     let suma=0;
//     for(let i=0;i<arguments.length;i++){
//         suma=suma+arguments[i];
//     }
//     console.log(suma);
// });
// sumar(1,2,3);
//console.log(sumar);

// Funciones Flecha
// var a="Jaime";
// const x=(a, b) => console.log("Jaime");
// console.log(x("Ana", "aaa"));

// Objeto Arguments
/*
function unaFuncion(a, b) {
    console.log(arguments);
    console.log(a);
    console.log(b);
    
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    
    
};
unaFuncion(2,3, 5);*/

function suma(a) {
    return function(b){
        return a+b;
    }
};

console.log(suma(3)(4));

