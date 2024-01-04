const botonVolver = document.getElementById("volver");
const botonEnviar = document.getElementById("enviar");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const mensajeContainer = document.getElementById("mensaje-container");
const mensajeError = document.getElementById("mensajeError");

botonVolver.addEventListener("click", function (evento) {
    window.location.href = "../index.html";
});

botonEnviar.addEventListener("click", function(evento) {
    evento.preventDefault(); 
    if (nombre.value !== '' && correo.value !== '' && mensaje.value !== '') {
      mensajeError.textContent = "Se ha enviado su mensaje. En breve recibirá respuesta";
    } else {
        // Mostrar mensaje de error si todos los campos están vacíos
        mensajeContainer.style.display = "block";
        mensajeError.textContent = "Por favor, completa todos los campos.";
    }
});