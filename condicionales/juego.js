const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10: "));

console.log(`Este es el número con el que juegas: ${numeroJugador}`);

if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 10) {
    console.log("Por favor, ingresa un número válido entre 1 y 10.");
} else if (numeroJugador === numeroSecreto) {
    console.log("¡Felicidades, adivinaste el número secreto!");
} else if (numeroJugador < numeroSecreto) {
    console.log("El número es demasiado bajo, intenta de nuevo.");
} else {
    console.log("El número es muy alto, intenta de nuevo."); 
}  

  