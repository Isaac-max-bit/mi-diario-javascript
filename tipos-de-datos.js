// PRIMITIVOS

//String
let nombre = 'Isaac'

//number
let edad = 20

//boolean 
let esMayorDeEdad = true

//null 
let noHayValor = null

// undefined 
let noDefinido = undefined

// Symbol 
let simboloÚnico = Symbol('único')

// bigint
let numeroGrande = 2n

// COMPLEJOS

//object 
let carro = {
    marca: 'Tesla',
    modelo: 'Model S',
}

// array 
let frutas = ['Manzana', 'banano', 'uvas']

//function 
function hola (){

}


// let numero = 40;
// numero = numero + 10;
// console.log(numero)

// let esVerdadero = true; 
// esVerdadero = false; 
// console.log(esVerdadero)

// let usuario = {
//     nombre: "Isaac",
//     edad: 20
// };
// usuario.edad = 24;

// console.log(usuario);

// let frutas = ["manzana", "pera", "kiwi"];
// frutas[0] = "sandia";

// console.log(frutas);

function cambiarNombre(objecto){
    objecto.nombre = "Nuevo Nombre";
}

let persona = {
    nombre: "Oscar"
};

cambiarNombre(persona);
console.log(persona);