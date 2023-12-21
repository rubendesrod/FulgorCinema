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
/*
interfaz.cerrarVenom.addEventListener("click", function () {
    interfaz.dialogVenom.close();
    interfaz.videoVenom.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
  }); */

  interfaz.cerrarVenom.addEventListener("click", function () {
    console.log("Clic en cerrarVenom");
    
    if (interfaz.videoVenom && interfaz.videoVenom.contentWindow) {
      console.log("contentWindow disponible");
      
      setTimeout(function () {
        console.log("Pausando el video");
        interfaz.videoVenom.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      }, 100); // Ajusta el tiempo de espera según sea necesario
    }
  
    if (interfaz.dialogVenom) {
      console.log("Cerrando el diálogo");
      interfaz.dialogVenom.close();
    }
  });
   