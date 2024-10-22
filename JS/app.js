// Funcion para abrir la nueva ventana del triler de youtube
function abrirYouTube(trailerURL) {
  // Abre una nueva pestaña con la URL del trailer de YouTube
  window.open(trailerURL, "_blank");
}

// Funcion que realiza todo el cambio en la cabecera de la pagina, foto, titulo, imagen, texto y imagenes
const cambiarBanner = function (evento, peliculaPorDefecto = "interestellar") {
   // Saco la pelicula que se ha elegido
   let pelicula = evento ? evento.srcElement.alt : peliculaPorDefecto;

  // Cambio la interfaz con la pelicula elegida
  interfaz.titulo.textContent = peliculas[pelicula].titulo;
  interfaz.descripcion.textContent = peliculas[pelicula].descripcion;
  interfaz.puntuacion.attributes.src.nodeValue = peliculas[pelicula].puntuacion;

  // interfaz.imagenFondo.attributes.src.nodeValue = peliculas[pelicula].imagen
  interfaz.imagenFondo.style.backgroundImage =
    "url(" + peliculas[pelicula].imagen + ")";
  interfaz.imagenFondo.style.backgroundPosition =
    peliculas[pelicula].movilImagenClass;

  // Para que mueva al usuario hasta la parte de arriba
  document.getElementById("logo").scrollIntoView({ behavior: "smooth" });

   // Configuramos el enlace del botón "Ver trailer" con la URL del trailer de la película
  const botonVerTrailer = document.querySelector(".boton_verTrailer");
  botonVerTrailer.onclick = function () {
     abrirYouTube(peliculas[pelicula].trailerURL);
  };

  // Cargamos las horas para el selector de horas cuando seleccionamos otra pelicula
  horas = peliculas[pelicula].horas;
  pintarHoras();
};



// Elementos que se quieren cambiar de la interfaz
const interfaz = {
  titulo: document.getElementById("titulo"),
  puntuacion: document.getElementById("puntuacion"),
  descripcion: document.getElementById("descripcion"),
  imagenFondo: document.getElementById("imagenFondo"),
};

// Objeto con las propiedades de cada pelicula
const peliculas = {
  // Cartelera de venom.
  venom: {
    titulo: "Venom",
    descripcion:
      "El periodista Eddie Brock intenta desenmascarar al genio científico Carlton Drake, el célebre fundador de la Fundación Vida. Mientras investiga uno de los experimentos de Drake, Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y lo vuelve perverso.",
    imagen: "../IMG/venom2.jpg",
    puntuacion: "../IMG/puntuacion/estrellas5.png",
    horas: ["12:30", "14:20", "16:30", "18:45", "22:30"],
    movilImagenClass: "center center",
    trailerURL: "https://www.youtube.com/watch?v=nZ8FXOpcXSs",
  },
  // Cartelera Fast And Furious X ..
  fastAndFurious: {
    titulo: "Fast And Furious X",
    descripcion:
      "Dom y su equipo acabaron con el capo de la droga brasileño Hernan Reyes y diezmaron su imperio en un puente de Río de Janeiro. Su hijo Dante, que fue testigo de todo, lleva desde entonces ideando un plan maestro para hacer que Dom pague un precio muy alto por lo que hizo.",
    imagen: "../IMG/fast_and_furius_x2.jpg",
    puntuacion: "../IMG/puntuacion/estrellas5.png",
    horas: ["17:30", "19:35", "20:30", "21:15", "23:30"],
    movilImagenClass: "center center",
    trailerURL: "https://www.youtube.com/watch?v=FDhvbIqTQwI",
  },
  // Cartelera de batman: Leyenda Renace ..
  batman: {
    titulo: "Batman: La leyenda Renace",
    descripcion:
      "Hace ya ocho años desde que Batman se convirtió en fugitivo al asumir la muerte de Harvey. La dura Ley Dent sigue aplacando la criminalidad de Gotham, aunque la llegada de una gata ladrona y un misterioso terrorista enmascarado lo cambiará todo.",
    imagen: "../IMG/batman.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
    horas: ["14:55", "16:20", "17:30", "19:00", "22:30"],
    movilImagenClass: "center right",
    trailerURL: "https://www.youtube.com/watch?v=e0qwi-4iOpE",
  },
  // Cartelera de tucker & dale, Contra el Mal .
  tucker: {
    titulo: "Tucker & Dale: Contra el Mal",
    descripcion:
      "Hilarante y desenfadada comedia de terror en la que dos grandes amigos,Tucker y Dale, de vacaciones en su destartalada casa de la montaña, son confundidos con paletos asesinos por un grupo de estudiantes detestables.",
    imagen: "../IMG/tucker_dale.jpg",
    puntuacion: "../IMG/puntuacion/estrellas3.png",
    horas: ["17:30", "19:15", "20:30", "22:20", "23:30"],
    movilImagenClass: "center top",
    trailerURL: "https://www.youtube.com/watch?v=Mn5W9moZRns",
  },
  // Cartelera equalizer 2.
  equalizer: {
    titulo: "Equalizer 2",
    descripcion:
      "El exagente secreto estadounidense Robert McCall continúa combatiendo por su cuenta a secuestradores, maltratadores y otros delincuentes que se cruzan en su solitaria vida de conductor de un servicio de VTC. Ahora, sin embargo, va a tener que intervenir en un asunto que le afecta personalmente.",
    imagen: "../IMG/equalizer.jpg",
    puntuacion: "../IMG/puntuacion/estrellas3.png",
    horas: ["12:30", "14:15", "16:30", "18:00", "22:30"],
    movilImagenClass: "center right",
    trailerURL: "https://www.youtube.com/watch?v=IibsmbB6PXQ",
  },
  // Cartelera interestellar .
  interestellar: {
    titulo: "Interstellar",
    descripcion:
      "Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí. La Tierra está llegando a su fin y este grupo necesita encontrar un planeta más allá de nuestra galaxia que garantice el futuro de la raza humana.",
    imagen: "../IMG/interestellar.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
    horas: ["17:30", "19:00", "20:30", "22:00", "23:30"],
    movilImagenClass: "center right",
    trailerURL: "https://www.youtube.com/watch?v=IKY4PnbEKkc",
  },
  // Cartelera Start Wars VIII : The last jedi .
  starWars: {
    titulo: "Star Wars VIII - Los últimos Jedi",
    descripcion:
      "La Primera Orden, bajo el mando del líder supremo Snoke, está a punto de hacerse con el control militar de la galaxia. Sólo la general Leia Organa y sus combatientes de la Resistencia plantan cara a la creciente tiranía, convencidos de que el maestro jedi Luke Skywalker regresará y devolverá una chispa de esperanza a la lucha.",
    imagen: "../IMG/star_wars2.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
    horas: ["12:30", "14:00", "16:30", "18:00", "22:30"],
    movilImagenClass: "center top",
    trailerURL: "https://www.youtube.com/watch?v=anOJjqQb8x0",
  },
  // Cartelera Joker alegra esa cara .
  joker: {
    titulo: "Joker",
    descripcion:
      "La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
    imagen: "../IMG/joker.jpg",
    puntuacion: "../IMG/puntuacion/estrellas3.png",
    horas: ["12:30", "14:00", "16:30", "18:00", "22:30"],
    movilImagenClass: "left center",
    trailerURL: "https://www.youtube.com/watch?v=ygUHhImN98w",
  },
  // Cartelera Barbie .
  barbie: {
    titulo: "BarBie",
    descripcion:
      "Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, Barbie parte hacia el mundo humano para encontrar la verdadera felicidad.",
    imagen: "../IMG/barbie.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
    horas: ["17:30", "19:00", "20:30", "22:00", "23:30"],
    movilImagenClass: "center center",
    trailerURL: "https://www.youtube.com/watch?v=vsJgLu3PIno",
  },
  // Cartelera Avengers: EndGame .
  avengers: {
    titulo: "Los Vengadores",
    descripcion:
      "Después de los eventos devastadores de 'Avengers: Infinity War', el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar detenerlo y restaurar el orden en el universo de una vez por todas.",
    imagen: "../IMG/avengers.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
    horas: ["12:30", "14:00", "16:30", "18:00", "22:30"],
    movilImagenClass: "center center",
    trailerURL: "https://www.youtube.com/watch?v=UQ3bqYKnyhM",
  },
  // Cartelera Harry Potter las reliquias de la muerte II
  harryPotter: {
    titulo: "Harry Potter y las reliquias de la muerte. Parte 2",
    descripcion:
      "La batalla entre las fuerzas del bien y del mal del mundo mágico se convierte en una guerra que no deja a nadie indiferente. Harry Potter es quien tiene que hacer el último sacrificio antes de enfrentarse al malvado Voldemort.",
    imagen: "../IMG/harry_potter2.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
    horas: ["17:30", "19:00", "20:30", "22:00", "23:30"],
    movilImagenClass: "center top",
    trailerURL: "https://www.youtube.com/watch?v=M1me0fEgYxY",
  },
  // Cartelera Extraccion 2
  extraccion2: {
    titulo: "Extraccion 2",
    descripcion:
      "De vuelta del borde de la muerte, el comando Tyler Rake se embarca en una peligrosa misión para salvar a la familia encarcelada de un gángster despiadado.",
    imagen: "../IMG/extraccion.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
    horas: ["12:30", "14:00", "16:30", "18:00", "22:30"],
    movilImagenClass: "center center",
    trailerURL: "https://www.youtube.com/watch?v=ZXGMlMPeO68",
  },
};

// Añadir evento a los botones
let imagenes = document.querySelectorAll(".pelicula");
imagenes.forEach((imagen) => {
  imagen.addEventListener("click", cambiarBanner);
});

// Hago una carga nada mas lea el script de la pelicula interestellar para cuando se entre por primera vez asctive la pelicula que esta precargada
cambiarBanner(document.getElementById("interestellar"));

// Funciones que estan a la escucha de cuando se proceda al pago
function soloNumeros(evt) {
  // Obtén el código de la tecla pulsada
  var charCode = (evt.which) ? evt.which : evt.keyCode;

  // Asegúrate de permitir solo números
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    evt.preventDefault();
  }
}

function limitarLongitud(input) {
  // Limita la longitud del número de tarjeta a 16 dígitos
  if (input.value.length > 16) {
    input.value = input.value.slice(0, 16);
  }
}

// Funcion para comprobar que el año sea posterior al que nos encontramos
function validarAnio() {
  var yearSelect = document.getElementById('year-select');
  var selectedYear = yearSelect.value;
  
  // Obtener el año actual
  var currentYear = new Date().getFullYear();

  // Validar si el año seleccionado es anterior al año actual
  if (selectedYear !== "Year" && parseInt(selectedYear) < currentYear) {
    alert("Por favor, seleccione un año futuro");
    // Puedes reiniciar la selección del año o tomar otras medidas según tus necesidades
    yearSelect.value = "Year";
  }
}