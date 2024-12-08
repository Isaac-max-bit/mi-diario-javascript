// Pedir al usuario el número hasta el cual generar las tablas
let hasta = parseInt(prompt("Ingresa el número hasta el cual deseas ver las tablas de multiplicar (hasta el 10):"));

// Validar que el número ingresado sea un número entre 1 y 10
if (isNaN(hasta) || hasta < 1 || hasta > 10) {
  console.log("Por favor ingresa un número entre 1 y 10.");
} else {
  // Crear un arreglo de números del 1 al número ingresado por el usuario
  const numeros = Array.from({ length: hasta }, (_, i) => i + 1);

  // Usar un forEach para recorrer cada número y generar su tabla de multiplicar
  numeros.forEach((numero) => {
    console.log(`Tabla del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
    console.log(''); // Espacio en blanco entre tablas
  });
}
