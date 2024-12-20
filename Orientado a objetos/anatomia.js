/*
Estructura de dato

key / value

objeto{
propiedad: valor,
propiedad: valor,
propiedad: valor

métodos()
}


*/

const persona = {
    nombre: "Isaac",
    edad: 20,
    direccion: {
        calle: "Carrera 69 #97-50",
        ciudad: "Medellin",
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    },
};

console.log(persona);
persona.saludar();

persona.telefono = "313-790-0176";

console.log(persona.telefono)


persona.despedir = () => {
    console.log("Adios");
};

persona.despedir();

delete persona.telefono;

delete persona.despedir;