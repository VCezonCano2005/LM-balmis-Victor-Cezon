"use strict";

document.addEventListener("DOMContentLoaded", async function () {
    const contenedorPopulares = document.getElementById("lista-populares");
    const contenedorCartelera = document.getElementById("lista-cartelera");

    const peliculasPopulares = await Populares.getMasPopulares(1);
    const peliculasCartelera = await Cartelera.getNuevasPeliculas(1);

    const cincoPopulares = peliculasPopulares.slice(0, 5);
    cincoPopulares.forEach(pelicula => {
        contenedorPopulares.appendChild(pelicula.DibujaResumen());
    });

    const cincoCartelera = peliculasCartelera.slice(0, 5);
    cincoCartelera.forEach(pelicula => {
        contenedorCartelera.appendChild(pelicula.DibujaResumen());
    });
});
