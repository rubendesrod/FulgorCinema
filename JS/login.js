const botonVolverIndex = document.getElementById("volverIndex");
const botonLogin = document.getElementById("loginButton");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("password");
const mensajeContainer = document.getElementById("mensaje-container");

botonVolverIndex.addEventListener("click", function(evento){
    window.location.href = "../index.html";
})

botonLogin.addEventListener("click", function(evento) {
    evento.preventDefault(); 
    if (usuario.value !== '' && contrasena.value !== '') {
        window.location.href = "../index.html";
    }else{
        mensajeContainer.style.display = "block";
        mensajeContainer.textContent = "Los campos no pueden estar vacíos";
    }
});