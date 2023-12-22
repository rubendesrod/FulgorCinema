// Primero recogeremos todos los elementos de la interfaz
const interfaz = {
  // Elementos de VENOM
  videoVenom: videoVenom,
  abrirVenom: verVenomTrailer,
  cerrarVenom: cerrarVenomTrailer,
  dialogVenom: venomTrailer,
  // Elementos de HarryPotter
  videoHarry: videoHarry,
  abrirHarry: verHarryTrailer,
  cerrarHarry: cerrarHarryTrailer,
  dialogHarry: harryTrailer,
  // Elementos de Fast and Furius
  videoFurious: videoFurious,
  abrirFurious: verFuriousTrailer,
  cerrarFurious: cerrarFuriousTrailer,
  dialogoFurious: furiousTrailer,
  // Elemento de Transformers
  videoTransformer: videoTransformer,
  abrirTransformer: verTransformerTrailer,
  cerrarTransformer: cerrarTransformerTrailer,
  dialogoTransformer: transformerTrailer,
  // Elementos de Star Wars
  videoStar: videoStarWars,
  abrirStar: verStarWarsTrailer,
  cerrarStar: cerrarStarWarsTrailer,
  dialogoStar: starWarsTrailer,
  // ELementos de Avengers
  videoAvengers: videoAvengers,
  abrirAvengers: verAvengersTrailer,
  cerrarAvengers: cerrarAvengersTrailer,
  dialogoAvengers: avengersTrailer,
};

// Eventos VENOM
interfaz.abrirVenom.addEventListener("click", function () {
  interfaz.dialogVenom.showModal();
});
interfaz.cerrarVenom.addEventListener("click", function () {
  interfaz.dialogVenom.close();
  interfaz.videoVenom.src = interfaz.videoVenom.src;
});

// Eventos HARRY POTTER
interfaz.abrirHarry.addEventListener("click", function () {
  interfaz.dialogHarry.showModal();
});
interfaz.cerrarHarry.addEventListener("click", function () {
  interfaz.dialogHarry.close();
  interfaz.videoHarry.src = interfaz.videoHarry.src;
});

// Eventos FAST AND FURIUOUS X
interfaz.abrirFurious.addEventListener("click", function () {
  interfaz.dialogoFurious.showModal();
});
interfaz.cerrarFurious.addEventListener("click", function () {
  interfaz.dialogoFurious.close();
  interfaz.videoFurious.src = interfaz.videoFurious.src;
});

// Eventos TRANSFORMERS
interfaz.abrirTransformer.addEventListener("click", function () {
  interfaz.dialogoTransformer.showModal();
});
interfaz.cerrarTransformer.addEventListener("click", function () {
  interfaz.dialogoTransformer.close();
  interfaz.videoTransformer.src = interfaz.videoTransformer.src;
});

// Eventos Avengers End Game
interfaz.abrirAvengers.addEventListener("click", function () {
  interfaz.dialogoAvengers.showModal();
});
interfaz.cerrarAvengers.addEventListener("click", function () {
  interfaz.dialogoAvengers.close();
  interfaz.videoAvengers.src = interfaz.videoAvengers.src;
});

// Eventos Star Wars
interfaz.abrirStar.addEventListener("click", function () {
  interfaz.dialogoStar.showModal();
});
interfaz.cerrarStar.addEventListener("click", function () {
  interfaz.dialogoStar.close();
  interfaz.videoStar.src = interfaz.videoStar.src;
});
