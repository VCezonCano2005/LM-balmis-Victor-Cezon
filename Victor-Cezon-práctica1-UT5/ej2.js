'use strict;'
function verAsignaturas(...alumnos) {
    if (alumnos.length === 0) {
        console.log("No hay datos para mostrar");
        return;
    }

    alumnos.forEach(([nombre, curso, ...asignaturas]) => {
        console.log(`${nombre} - ${curso} - asignaturas: ${asignaturas.join(" / ")}`);
    });
}


verAsignaturas(
    ["Sara", "DAMA", "Programación", "ED"],
    ["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"]
);

verAsignaturas(["Álvaro", "Semi", "BBDD"]);

verAsignaturas();