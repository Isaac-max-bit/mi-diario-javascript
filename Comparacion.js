/*

Operadores de comparación

*/

// ==
// ===
// !=
// !==
// >
// >
// >=
// <=

// const a = 10; 
// const b = 20;
// const c = "10"

// a == b;

/*

Operadores Lógicos

*/

// &&
// ||
// !

// const a = 10;
// const b = 20;
// const c = "10"

// Operadores logicos

// Operador lógico AND (&&): Este operador lógico compara dos expresiones.
//  Se debe de tener ambas expresiones
//   verdaderas para que el resultado sea verdadero,
//    pero si una o ambas expresiones son falsas, la 
//    sentencia completa se devolverá como falsa.

// Operador lógico OR (||): Este devuelve como true si
//  cualquiera de las dos expresiones son verdaderas y 
//  false cuando ambas expresiones son falsas. Ambas expresiones  
//  pueden ser verdaderas, pero solo se necesita una para que 
//  el resultado sea verdadero.

// Operador lógico NOT (!): El operador lógico NOT no realiza ninguna comparación como lo hacen
//  los operadores AND y OR.

// Este se utiliza con un símbolo "!" (signo de exclamación) para representar un operador 
// NOT o negación.

const num1 = 20;
const num2 = "20";
const num3 = 30; 

console.log(num1 == num2);
console.log(num1 === num2 && num1 != num3);
console.log(num2 === num1 || num3 != num1);