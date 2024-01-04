const botonVolver = document.getElementById("volver");
const botonRegistro = document.getElementById("registro");
const mensajeContainer = document.getElementById("mensaje-container");

botonVolver.addEventListener("click", function (evento) {
    window.location.href = "login.html";
});

botonRegistro.addEventListener("click", function (evento) {
    if (validarFormulario()) {
        window.location.href = "login.html";
    } else {
        mensajeContainer.style.display = "block";
        mensajeContainer.textContent = "Por favor, rellena los campos correctamente";
        evento.preventDefault(); 
    }
});

function validarFormulario() {
    const nombre = document.getElementById('txtNombre').value;
    const primerApellido = document.getElementById('txtPrimerApellido').value;
    const segundoApellido = document.getElementById('txtSegundoApellido').value;
    const dni = document.getElementById('txtDni').value;
    const fechaNacimiento = document.getElementById('dateFechaNacimiento').value;
    const calle = document.getElementById('txtCalle').value;
    const numero = document.getElementById('txtNumero').value;
    const ciudad = document.getElementById('txtCiudad').value;
    const provincia = document.getElementById('selcProvincia').value;
    const cp = document.getElementById('txtCp').value;
    const telefono = document.getElementById('numbTlf').value;
    const correo = document.getElementById('emailCorreo').value;

    return nombre !== '' && primerApellido !== '' && segundoApellido !== '' &&
        dni !== '' && fechaNacimiento !== '' && calle !== '' && numero !== '' &&
        ciudad !== '' && provincia !== '' && cp !== '' && telefono !== '' && correo !== '';
}