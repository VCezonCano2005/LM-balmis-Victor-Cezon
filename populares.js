"use strict";

document.addEventListener("DOMContentLoaded", async function () {
    const contenedor = document.getElementById("rejilla-populares");

    const peliculas = await Populares.getMasPopulares(1);

    peliculas.forEach(pelicula => {
        contenedor.appendChild(pelicula.DibujaPopular());
    });
});
