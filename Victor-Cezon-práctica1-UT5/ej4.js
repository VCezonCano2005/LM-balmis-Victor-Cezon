'use strict;'
let alumnos = [
    { nombre: 'Juan', edad: 25},
    { nombre: 'Ana', edad: 30},
    { nombre: 'Pedro', edad: 40}
  ]
  let curso = prompt("¿De que curso son tus alumnos?")
  let asignaturas = prompt("¿Que asignaturas cursan?")

  function devolverArray(alumnos) {
   return alumnos.map(alumno => {
    return {
      nombre: alumno.nombre,
      edad: alumno.edad,
      curso: curso,
      asignaturas: asignaturas
    };
  });
}

let nuevoArray = devolverArray(alumnos);

console.log(nuevoArray);