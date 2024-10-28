alert("Hola Isaac, soy un while");


/*

while(condición){
   código
}

*/

// let contador = 0; 

// while(contador < 10){
//     console.log(contador)
//     contador++;
// }

let categorías = []; // Arreglo para almacenar las categorías
let continuar = true; // Controla el bucle

while (continuar) {
    let categoría = prompt("Ingrese una categoría de videojuegos (o escriba 'salir' para terminar):");

    if (categoría.toLowerCase() === 'salir') {
        continuar = false; // Cambia la variable para salir del bucle
    } else if (categoría) {
        categorías.push(categoría); // Agrega la categoría al arreglo
        console.log(`Categoría "${categoría}" agregada.`);
    } else {
        console.log("Por favor, ingrese un nombre válido.");
    }
}

// Muestra todas las categorías ingresadas
console.log("Categorías de videojuegos ingresadas:");
for (let cat of categorías) {
    console.log(cat);
}
