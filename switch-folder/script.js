alert("Hola Isaac, nuestro switch"); 

// switch(expresión){
//     case valor1: 
//     //código a ejecutar
//     break;
//     case valor2: 
//     //código a ejecutar
//     break; 
//     case valor1: 
//     //código a ejecutar
//     break;
//     case valor2: 
//     //código a ejecutar
//     break;  
//     default: 
//     //codigo
// }

// function FavoritoVideojuegos() {
//     var videojuegos = prompt("Ingrese del 1 al 5 de tu videojuego favorito:  ").toLowerCase();

//     switch(videojuegos){
//         case "1":
//             alert("Resident evil 2 remake");
//             break;
//         case "2":
//             alert("God of war Ragnarok");
//             break;
//         case "3":
//             alert("The last of us Remastered");
//             break;
//         case "4":
//             alert("The last of us part 2");
//             break;
//         case "5":
//             alert("Marvel spiderman ps4");
//             break;
//             default:
//                 console.log("El numero que ingresaste no está entre la categoría");
//     }

// }
// FavoritoVideojuegos();

let expr = "Manzanas";

switch(expr){
    case "Naranjas":
        alert("Las naranjas cuestan $20 el kilo")
    break;
    case "Manzanas":
        alert("Las manzanas cuestan $43 el kilo")
    break;
    case "Plátanos":
        alert("Las plátanos cuestan $30 el kilo")
    break;
    case "Naranjas":
        alert("Las naranjas cuestan $20 el kilo")
    break;
    case "Mangos":
    case "Papayas":
        alert("Las naranjas cuestan $20 el kilo")
    break;
    default:
        alert(`Lo siento, no contamos con ${expr}`);
}

alert("Hay algo más que desees?")