// const persona = {
//     nombre: "Isaac Alejandro",
//     apellido: "Garcia Amaya"
// }

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("Isaac Alejandro","Garcia Amaya",20);

console.log(persona1);


const persona2 = new Persona("Yaneth Alexandra","Amaya Solano", 50);

console.log(persona2);


Persona.prototype.telefono = "555-136-6219";