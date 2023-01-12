//Arrays
// let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
// let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"]
// let saludo = ["hola","mundo!"]
// let saludo2 = ["hola","hola!"]

// console.log(seriesFavoritasDeAna);
// console.log(seriesFavoritasDeHector);
// console.log(saludo);
// console.log(saludo2);

//Metodos de arrays
// let notas = [3,5,10,9,7,8,8,8];

// notas.shift();
// notas.shift();

// notas.unshift(1);

// notas.push(4);
// notas.push(4);

// notas.pop();

// console.log(notas);


//EJEMPLOS VIDEO CLASE6 1RA PARTE
// let nombres = ["Juan", "Mariana", "Pablo"]
// //nombres.push("Diego")

// //let elUltimo = nombres.pop("Pablo");

// let elPrimero = nombres.shift();

// // console.log(nombres);
// // console.log(elUltimo);
// console.log(elPrimero);

//indexOf
//lastIndexOf
//let notas = [3,5,8,10,9,7,8,8];

//let posicionDelOcho = notas.indexOf(8);
//let posicionDelOcho = notas.lastIndexOf(8);

//ejemplo de cuando agregas un numero que no existe en el arrays, te va a mostrar -1
// let posicionDelOcho = notas.indexOf(2);
// console.log(posicionDelOcho);

//Ejemplo cuando ese numero que no existe lo agregas
// let notas = [3,5,8,10,9,7,8,8];
// let posicionDelOcho = notas.indexOf(8);

// if (posicionDelOcho != -1){
//     console.log("Lo encontre");
// }

//join
// let diasEntreSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
// diasEntreSemana.join("-");
// console.log(diasEntreSemana);

//Ejemplo video - join()
let notas = [3,5,8,10,9,7,8,8];

let resultadoJuntado = notas.join(" - ");

console.log(resultadoJuntado);

