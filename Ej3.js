function validar() {

    let errores = document.getElementById("errores");
    errores.textContent = "";

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let rcontraseña = document.getElementById("rcontraseña").value;
    let email = document.getElementById("email").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;

    let mensajes = [];

    let expUsuario = /^[A-Z].*\d$/;
    if (!expUsuario.test(usuario)) {
        mensajes.push("Usuario: debe empezar con mayúscula y acabar en número.");
    }

    let expContraseña = /^\d.{6}[A-Z]$/;
    if (!expContraseña.test(contraseña)) {
        mensajes.push("Contraseña: 8 caracteres, empieza por número y termina en mayúscula.");
    }

    if (contraseña !== rcontraseña) {
        mensajes.push("Las contraseñas no coinciden.");
    }

    if (!/^[A-Z]/.test(nombre)) {
        mensajes.push("Nombre: debe comenzar con mayúscula.");
    }

    if (!/^[A-Z]/.test(apellidos)) {
        mensajes.push("Apellidos: deben comenzar con mayúscula.");
    }

    if (!/^[679]\d+$/.test(telefono)) {
        mensajes.push("Teléfono: debe empezar por 6, 7 o 9.");
    }

    if (mensajes.length > 0) {
        errores.textContent = mensajes.join(" / ");
        return false;
    }

    errores.textContent = "Formulario correcto";
    return true;
}