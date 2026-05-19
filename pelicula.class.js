"use strict";

class Pelicula {
    constructor(imagen, titulo, descripcion, valoracion, fecha) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.valoracion = valoracion;
        this.fecha = fecha;
    }

    DibujaPopular() {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-popular");

        const imgSrc = this.imagen ? IMAGE_BASE + this.imagen : "https://via.placeholder.com/500x750?text=Sin+imagen";

        tarjeta.innerHTML = `
            <div class="tarjeta-popular__imagen-contenedor">
                <img src="${imgSrc}" alt="${this.titulo}" class="tarjeta-popular__imagen">
                <div class="tarjeta-popular__overlay">
                    <p class="tarjeta-popular__descripcion">${this.descripcion || "Sin descripción disponible."}</p>
                </div>
            </div>
            <div class="tarjeta-popular__info">
                <h3 class="tarjeta-popular__titulo">${this.titulo}</h3>
                <div class="tarjeta-popular__meta">
                    <span class="tarjeta-popular__valoracion">★ ${this.valoracion ? this.valoracion.toFixed(1) : "N/A"}</span>
                    <span class="tarjeta-popular__fecha">${this.fecha ? this.fecha.slice(0, 4) : ""}</span>
                </div>
            </div>
        `;

        return tarjeta;
    }

    DibujaCartelera() {
        const diapositiva = document.createElement("div");
        diapositiva.classList.add("diapositiva");

        const imgSrc = this.imagen ? IMAGE_BASE + this.imagen : "https://via.placeholder.com/500x750?text=Sin+imagen";

        diapositiva.innerHTML = `
            <div class="diapositiva__fondo" style="background-image: url('${imgSrc}')"></div>
            <div class="diapositiva__contenido">
                <h2 class="diapositiva__titulo">${this.titulo}</h2>
                <p class="diapositiva__descripcion">${this.descripcion || "Sin descripción disponible."}</p>
                <div class="diapositiva__meta">
                    <span class="diapositiva__valoracion">★ ${this.valoracion ? this.valoracion.toFixed(1) : "N/A"}</span>
                    <span class="diapositiva__fecha">${this.fecha ? this.fecha.slice(0, 4) : ""}</span>
                </div>
            </div>
        `;

        return diapositiva;
    }

    DibujaResumen() {
        const elemento = document.createElement("div");
        elemento.classList.add("resumen-pelicula");

        const imgSrc = this.imagen ? IMAGE_BASE + this.imagen : "https://via.placeholder.com/500x750?text=Sin+imagen";

        elemento.innerHTML = `
            <img src="${imgSrc}" alt="${this.titulo}" class="resumen-pelicula__imagen">
            <div class="resumen-pelicula__info">
                <span class="resumen-pelicula__titulo">${this.titulo}</span>
                <span class="resumen-pelicula__valoracion">★ ${this.valoracion ? this.valoracion.toFixed(1) : "N/A"}</span>
            </div>
        `;

        return elemento;
    }
}
