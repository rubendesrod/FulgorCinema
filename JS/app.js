const cambiarBanner = function (evento) {
  // Saco la pelicula que se ha elegido
  let pelicula = evento.srcElement.alt;
  // Cambio la interfaz con la pelicula elegida
  interfaz.titulo.textContent = peliculas[pelicula].titulo;
  interfaz.descripcion.textContent = peliculas[pelicula].descripcion;
  interfaz.puntuacion.attributes.src.nodeValue = peliculas[pelicula].puntuacion;
  interfaz.imagenFondo.attributes.src.nodeValue = peliculas[pelicula].imagen
  // Para que mueva al usuario hasta la parte de arriba
  document.getElementById('logo').scrollIntoView({ behavior: 'smooth' });
};

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
  },
  // Cartelera Fast And Furious X ..
  fastAndFurious: {
    titulo: "Fast And Furious X",
    descripcion:
      "Dom y su equipo acabaron con el capo de la droga brasileño Hernan Reyes y diezmaron su imperio en un puente de Río de Janeiro. Su hijo Dante, que fue testigo de todo, lleva desde entonces ideando un plan maestro para hacer que Dom pague un precio muy alto por lo que hizo.",
    imagen: "../IMG/fast_and_furius_x.jpg",
    puntuacion: "../IMG/puntuacion/estrellas5.png",
  },
  // Cartelera de batman: Leyenda Renace ..
  batman: {
    titulo: "Batman: La leyenda Renace",
    descripcion:
      "Hace ya ocho años desde que Batman se convirtió en fugitivo al asumir la muerte de Harvey. La dura Ley Dent sigue aplacando la criminalidad de Gotham, aunque la llegada de una gata ladrona y un misterioso terrorista enmascarado lo cambiará todo.",
    imagen: "../IMG/batman.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
  },
  // Cartelera de tucker & dale, Contra el Mal .
  tucker: {
    titulo: "Tucker & Dale: Contra el Mal",
    descripcion:
      "Hilarante y desenfadada comedia de terror en la que dos grandes amigos,Tucker y Dale, de vacaciones en su destartalada casa de la montaña, son confundidos con paletos asesinos por un grupo de estudiantes detestables.",
    imagen: "../IMG/tucker&dale.jpg",
    puntuacion: "../IMG/puntuacion/estrellas3.png",
  },
  // Cartelera equalizer 2.
  equalizer: {
    titulo: "Equalizer 2",
    descripcion:
      "El exagente secreto estadounidense Robert McCall continúa combatiendo por su cuenta a secuestradores, maltratadores y otros delincuentes que se cruzan en su solitaria vida de conductor de un servicio de VTC. Ahora, sin embargo, va a tener que intervenir en un asunto que le afecta personalmente.",
    imagen: "../IMG/equalizer.jpg",
    puntuacion: "../IMG/puntuacion/estrellas3.png",
  },
  // Cartelera interestellar .
  interestellar: {
    titulo: "Interstellar",
    descripcion:
      "Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí. La Tierra está llegando a su fin y este grupo necesita encontrar un planeta más allá de nuestra galaxia que garantice el futuro de la raza humana.",
    imagen: "../IMG/interestellar.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
  },
  // Cartelera Start Wars VIII : The last jedi .
  starWars: {
    titulo: "Star Wars VIII - Los últimos Jedi",
    descripcion:
      "La Primera Orden, bajo el mando del líder supremo Snoke, está a punto de hacerse con el control militar de la galaxia. Sólo la general Leia Organa y sus combatientes de la Resistencia plantan cara a la creciente tiranía, convencidos de que el maestro jedi Luke Skywalker regresará y devolverá una chispa de esperanza a la lucha.",
    imagen: "../IMG/star_wars2.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
  },
  // Cartelera Joker alegra esa cara .
  joker: {
    titulo: "Joker",
    descripcion:
      "La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
    imagen: "../IMG/joker.jpg",
    puntuacion: "../IMG/puntuacion/estrellas3.png",
  },
  // Cartelera Barbie .
  barbie: {
    titulo: "BarBie",
    descripcion:
      "Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, Barbie parte hacia el mundo humano para encontrar la verdadera felicidad.",
    imagen: "../IMG/barbie.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
  },
  // Cartelera Avengers: EndGame .
  avengers: {
    titulo: "Los Vengadores",
    descripcion:
      "Después de los eventos devastadores de 'Avengers: Infinity War', el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar detenerlo y restaurar el orden en el universo de una vez por todas.",
    imagen: "../IMG/avengers.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
  },
  // Cartelera Harry Potter las reliquias de la muerte II
  harryPotter: {
    titulo: "Harry Potter y las reliquias de la muerte. Parte 2",
    descripcion:
      "La batalla entre las fuerzas del bien y del mal del mundo mágico se convierte en una guerra que no deja a nadie indiferente. Harry Potter es quien tiene que hacer el último sacrificio antes de enfrentarse al malvado Voldemort.",
    imagen: "../IMG/harry_potter2.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
  },
  // Cartelera Extraccion 2
  extraccion2: {
    titulo: "Extraccion 2",
    descripcion:
      "De vuelta del borde de la muerte, el comando Tyler Rake se embarca en una peligrosa misión para salvar a la familia encarcelada de un gángster despiadado.",
    imagen: "../IMG/extraccion.jpg",
    puntuacion: "../IMG/puntuacion/estrellas4.png",
  },
};

// Añadir evento a los botones
let imagenes = document.querySelectorAll(".pelicula");
imagenes.forEach((imagen) => {
  imagen.addEventListener("click", cambiarBanner);
});
