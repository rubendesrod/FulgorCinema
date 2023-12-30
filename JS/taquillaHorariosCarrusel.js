const interfazHorarios = {
  horarios_dias: document.getElementById("horarios_dias"),
  boton_izquierda_horarios_dias: document.getElementById(
    "boton_izquierda_horarios_dias"
  ),
  boton_derecha_horarios_dias: document.getElementById(
    "boton_derecha_horarios_dias"
  ),
  horarios_horas: document.getElementById("horarios_horas"),
  boton_izquierda_horarios_horas: document.getElementById(
    "boton_izquierda_horarios_horas"
  ),
  boton_derecha_horarios_horas: document.getElementById(
    "boton_derecha_horarios_horas"
  ),
};

const dias = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];

const pintarDias = function () {
  //Vaciamos lo que que hay en el ul de los dias
  interfazHorarios.horarios_dias.innerHTML = "";
  let diasMostrar;
  //Si el dia es lunes
  if (diaActual === 0) {
    //Tres elementos a mostrar, creamos un array para meter los tres dias
    diasMostrar = [dias[6], dias[0], dias[1]];
    //Si el  día es domingo
  } else if (diaActual === 6) {
    diasMostrar = [dias[5], dias[6], dias[0]];
  } else {
    //Cortamos el dia anterior a dos dias despues
    diasMostrar = [...dias.slice(diaActual - 1, diaActual + 2)];
  }
  diasMostrar.forEach((dia) => {
    interfazHorarios.horarios_dias.innerHTML += "<li>" + dia + "</li>";
  });
};
//Capturamos el dia de la semana real para ponerle como predefinido en la pagina
// getDay() devuelve el domingo como un 0, y el sabado como un 6, asique hacemos este ajuste para que el lunes sea 0 y el domingo 6
let diaActual = (new Date().getDay() + 6) % 7;
pintarDias();
const izquierdaDias = function () {
  //Calculamos el dia actual: si es mayor que 0 dia anterior(-1) si no lo es 6, que seria el domingo
  diaActual = diaActual > 0 ? diaActual - 1 : 6;
  pintarDias();
};

const derechaDias = function () {
  //Calculamos el dia actual: si es menor que 6 dia siguiente (+1) si no lo es 0, que seria el lunes
  diaActual = diaActual < 6 ? diaActual + 1 : 0;
  pintarDias();
};

interfazHorarios.boton_izquierda_horarios_dias.addEventListener(
  "click",
  izquierdaDias
);

interfazHorarios.boton_derecha_horarios_dias.addEventListener(
  "click",
  derechaDias
);

//Para como esta planteado el array de horas siempre tiene que ser 5 elementos
const pintarHoras = function () {
  interfazHorarios.horarios_horas.innerHTML = "";
  let horasMostrar;
  if (horaActual === 0) {
    horasMostrar = [horas[4], horas[0], horas[1]];
  } else if (horaActual === 4) {
    horasMostrar = [horas[3], horas[4], horas[0]];
  } else {
    horasMostrar = [...horas.slice(horaActual - 1, horaActual + 2)];
  }
  horasMostrar.forEach((dia) => {
    interfazHorarios.horarios_horas.innerHTML += "<li>" + dia + "</li>";
  });
};
//Del array peliculas cogemos por primera vez las de interrestellar que es la peli predefinida
let horas = peliculas["interestellar"].horas;
let horaActual = 1;
pintarHoras();

const izquierdaHora = function () {
  horaActual = horaActual > 0 ? horaActual - 1 : 4;
  pintarHoras();
};

const derechaHora = function () {
  horaActual = horaActual < 4 ? horaActual + 1 : 0;
  pintarHoras();
};

interfazHorarios.boton_izquierda_horarios_horas.addEventListener(
  "click",
  izquierdaHora
);

interfazHorarios.boton_derecha_horarios_horas.addEventListener(
  "click",
  derechaHora
);
