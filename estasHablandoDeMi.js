function menciona(textoABuscar , palabraQueSeAgrega){
    let index = textoABuscar.indexOf(palabraQueSeAgrega)
    let resultado = index > -1 ? true : false;
    return resultado
};

console.log(menciona("Existen muchos lenguajes de programación y JavaScript es uno de ellos" , "programación"));