const botonVolver = document.getElementById("volver");
const botonEnviar = document.getElementById("enviar");
const correo = document.getElementById("correo");
const mensajeContainer = document.getElementById("mensaje-container");

botonVolver.addEventListener("click", function (evento) {
    window.location.href = "login.html";
})

botonEnviar.addEventListener("click", function (evento) {
    if (validarCorreo(correo.value)) {
        mostrarMensaje("Se le ha mandado un correo para restablecer la contraseña");
        correo.value = '';
    } else {
        mostrarMensaje("Por favor, introduce una dirección de correo electrónico válida");
        correo.value = '';
    }
})

function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

function mostrarMensaje(mensaje) {
    mensajeContainer.textContent = mensaje;
    mensajeContainer.style.display = "block";
}