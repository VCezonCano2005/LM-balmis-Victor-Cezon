'use strict;'
function Ejercicio3(array1, array2) {
    let contador = 0;

    array1.forEach(nombre => {
        if (array2.includes(nombre)) {
            contador++;
        }
    });

    if (contador === array1.length) {
        console.log("Todos los nombres están incluidos.");
    } else if (contador === 0) {
        console.log("Ningún nombre está incluido.");
    } else {
        console.log("Algunos nombres están incluidos.");
    }
}

Ejercicio3(
    ["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"],
    ["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"]
);

Ejercicio3(
    ["Lina Armida Machado Iglesias","Apolonia Santiago Buendía","Poncio Cobo Herrera","Rafaela Seco Cañas","Fulvia García"],
    ["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"]
);


Ejercicio3(
    ["Elisabet Ricart Monreal","Poncio Cobo Herrera","Isaac Talavera Luna"],
    ["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"]
);