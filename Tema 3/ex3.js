// Ús de typeof

'use strict';

let numero= 1;
let cadena= "A";
let aux= numero + cadena;

console.log(numero+" + "+cadena+" = "+aux+", i es de tipus: "+typeof(aux));
aux = numero * cadena
console.log(numero+" * "+cadena+" = "+aux+", i es de tipus: "+typeof(aux));
console.log("El primer funciona així perque el '+' concatena les variables, mentre que el segon intenta multiplicar un int i un string, que no es pot")
