"use strict";

class Cartelera {
    static getNuevasPeliculas(pagina = 1) {
        const url = `${API_BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${pagina}`;
        return fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => resultado.results.map(p => new Pelicula(
                p.poster_path,
                p.title,
                p.overview,
                p.vote_average,
                p.release_date
            )))
            .catch(error => console.log(error));
    }
}
