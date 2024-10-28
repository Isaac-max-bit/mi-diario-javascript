alert("Hola Isaac, bienvenido");

/*
for in -----> objetos

propiedades = valor 

array,string

item

for (variable in objeto){
  código 
}

*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
};

// Usando for...in para obtener las claves
for (fruta in listaDeCompras) {
    console.log(fruta); // Imprime solo las frutas
}

// Imprimiendo fruta y cantidad
for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`); // Imprime fruta y su cantidad
}

// Usando Object.keys para iterar sobre las claves
for (fruta of Object.keys(listaDeCompras)) {
    console.log(fruta); // Imprime solo las frutas
}

// Usando Object.entries para obtener claves y valores
for (const [fruta, cantidad] of Object.entries(listaDeCompras)) {
    console.log(`${fruta} : ${cantidad}`); // Imprime fruta y su cantidad
}
