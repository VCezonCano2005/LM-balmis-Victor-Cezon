'use strict;'
function Ejercicio1(array, funcionOrdenacion) {

    if (!Array.isArray(array)) {
        console.log("El primer parámetro no es un array.");
        return;
    }

    if (typeof funcionOrdenacion !== "function") {
        console.log("El segundo parámetro no es una función");
        return;
    }

    console.log("Array original:", array);

    array.sort(funcionOrdenacion);

    console.log("Array ordenado:", array);

    return array.toString();
}

function OrdenaFechas(a, b) {
    return new Date(a) - new Date(b);
}

function OrdenaNumeros(a, b) {
    return a - b;
}




Ejercicio1();

let fechas = [
    "2023-06-15",
    "2021-12-10",
    "2022-03-25",
    "2023-01-01"
];

Ejercicio1(fechas, OrdenaFechas);

let numeros = [89, 23, 444, 150, 11];

Ejercicio1(numeros, OrdenaNumeros);