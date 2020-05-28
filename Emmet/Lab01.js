/*var edad=18;
(edad>18)?console.log("Mayor de edad"):console.log("Menor de edad");

var z=(edad>18)?"Mayor de edad":"Menor de edad";
console.log(z);*/
/*
var f1 = (function(a,b){
    return a*b;
});

console.log(f1(3,5));

var f2 = (function(a,b){
    a= a*b;
});

console.log(f2(4,5));*/
/*
(function(){
    console.log("Jaime");
})();


var x=8, y=9;
var f2 = (function(a,b){ return a*b; })(x,y);
console.log(f2);*/
/*
const f1 = (x, y)=>{
    let z=x*y;
    return z;
}

var n=f1(5,7);
console.log(n);



const f2 = (x, y)=> x*y;

var n=f2(2,7);
console.log(n);

*/
/*
const f3=function(a,b){
    let s=a*b;
    let r=a-b;
    let p=a*b;
    let d=a/b;

    console.log(`La suma es: ${s}`);
    console.log("La resta es:"+r);
    console.log("La multupli es:"+p);
    console.log("La divsion es:"+d);
};
f3(10,5);*/
/*
var a = "HOLA ";
function global(){
    var b = "BUENOS ";
    function local(){
        var c = "DIAS";
        return a + b + c;
    }
    return local;
}
console.log(global()); // Devuelve la función local: "function local() { var c ="DIAS"...""
console.log(global()()); // Devuelve la ejecución de la función local: "HOLA BUENOS DIAS"
var closure = global();
console.log(closure()); // Devuelve lo mismo que global()(): "HOLA BUENOS DIAS"


function suma(a){
    return function(b){
        return a+b;
    }
}
console.log(suma(1)(2));
*/

function getContador() {
    var contador=0;
    return function(){
        return contador++;
    }
}
var conta=getContador();
console.log(conta());
console.log(conta());
console.log(conta());
console.log(conta());

