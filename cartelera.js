"use strict";

let indiceDiapositiva = 0;
let peliculasCargadas = [];

document.addEventListener("DOMContentLoaded", async function () {
    const contenedorCarrusel = document.getElementById("carrusel-pista");

    peliculasCargadas = await Cartelera.getNuevasPeliculas(1);

    peliculasCargadas.forEach(pelicula => {
        contenedorCarrusel.appendChild(pelicula.DibujaCartelera());
    });

    actualizarCarrusel();

    document.getElementById("btn-anterior").addEventListener("click", () => {
        indiceDiapositiva = (indiceDiapositiva - 1 + peliculasCargadas.length) % peliculasCargadas.length;
        actualizarCarrusel();
    });

    document.getElementById("btn-siguiente").addEventListener("click", () => {
        indiceDiapositiva = (indiceDiapositiva + 1) % peliculasCargadas.length;
        actualizarCarrusel();
    });

    setInterval(() => {
        indiceDiapositiva = (indiceDiapositiva + 1) % peliculasCargadas.length;
        actualizarCarrusel();
    }, 5000);
});

function actualizarCarrusel() {
    const pista = document.getElementById("carrusel-pista");
    pista.style.transform = `translateX(-${indiceDiapositiva * 100}%)`;
}
