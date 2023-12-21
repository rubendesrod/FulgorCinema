// Primero recogeremos todos los elementos de la interfaz
const interfaz = {
    // Elementos de VENOM
    videoVenom:videoVenom,
    abrirVenom:verVenomTrailer,
    cerrarVenom:cerrarVenomTrailer,
    dialogVenom:venomTrailer
    // Elementos de HarryPotter
    // Elementos de Fast and Furius
    // Elemento de Transformers
    // Elementos de Star Wars
    // ELementos de BatMan
}

interfaz.abrirVenom.addEventListener("click", function(){
    interfaz.dialogVenom.showModal();
})

interfaz.cerrarVenom.addEventListener("click", function () {
    interfaz.dialogVenom.close();
    interfaz.videoVenom.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
  });