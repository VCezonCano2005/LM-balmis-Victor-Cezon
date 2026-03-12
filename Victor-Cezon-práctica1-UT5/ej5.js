'use strict;'
const usuarios = [
{ nombre: "Ana", direccion: { pais: "España", ciudad: "Madrid", calle: "Gran Vía" } },
{ nombre: "Luis", direccion: { pais: "España", ciudad: "Barcelona", calle: "La Rambla" } },
{ nombre: "Carlos", direccion: { pais: "Francia", ciudad: "Paris", calle: "Champs-Élysées" } },
{ nombre: "María", direccion: { pais: "España", ciudad: "Madrid", calle: "Calle Arenal" } },
]

let resultado = usuarios
  .filter(usuario => usuario.direccion.ciudad === "Madrid")
  .sort((a, b) => a.nombre.localeCompare(b.nombre))
  .map(usuario => usuario.nombre.toUpperCase());

console.log(resultado);