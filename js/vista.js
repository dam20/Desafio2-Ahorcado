var principal = document.querySelector("main");
var inicio = document.querySelector(".inicio");
var ingreso = document.querySelector(".ingreso");
var juego = document.querySelector(".juego");
var inputPalabra = document.querySelector(".palabra");
var pincel = document.querySelector("canvas");

var btnIniciarJuego = document.querySelector(".iniciarJuego");
var btnNuevaPalabra = document.querySelector(".nuevaPalabra");
var btnGuardar = document.querySelector(".guardarEmpezar");
var btnCancelar = document.querySelector(".cancelar");
var btnNuevaPartida = document.querySelector(".nuevaPartida");
var btnAbandonar = document.querySelector(".abandonar");


function crearElemento(tipo, clase, padre) {
    var elemento = document.createElement(tipo);
    elemento.setAttribute("class", clase);
    padre.appendChild(elemento);
    return elemento;
}


function limpiarPantalla() {
    principal.removeChild(principal.lastChild);
}

function vistaPrincipal() {
    limpiarPantalla();
    inicio = crearElemento("section", "inicio", principal);
    crearBotonesInicio();

}


function crearBotonesInicio() {
    btnIniciarJuego = crearElemento("button", "iniciarJuego botonAzul", inicio);
    btnIniciarJuego.textContent = "Iniciar Juego";

    btnNuevaPalabra = crearElemento("button", "nuevaPalabra botonTransparente", inicio);
    btnNuevaPalabra.textContent = "Agregar Nueva Palabra";

    agregarListenerInicio();
}

function agregarListenerInicio() {
    btnIniciarJuego.addEventListener('click', () => {
        nuevaPartida();
        vistaNuevaPartida();
    });
    btnNuevaPalabra.addEventListener('click', () => {
        vistaNuevaPalabra();
    });
}

function vistaNuevaPalabra() {
    limpiarPantalla();
    ingreso = crearElemento("section", "ingreso", principal);
    inputPalabra = crearElemento("input", "palabra", ingreso);
    inputPalabra.setAttribute("type", "text");
    inputPalabra.setAttribute("placeholder", "Ingrese una palabra");

    var aclaracion = crearElemento("div", "aclaracion", ingreso);
    crearElemento("i", "bi bi-exclamation-circle-fill", aclaracion);
    crearElemento("p", "", aclaracion).innerHTML = "Max. 8 letras";

    crearBotonesIngreso();

}

function crearBotonesIngreso() {
    var btnsDoble = crearElemento("div", "botonesDoble", ingreso);
    btnGuardar = crearElemento("button", "guardarEmpezar botonAzul", btnsDoble);
    btnGuardar.setAttribute("id", "botonGeneral");
    btnGuardar.textContent = "Guardar y Empezar";

    btnCancelar = crearElemento("button", "cancelar botonTransparente", btnsDoble);
    btnCancelar.setAttribute("id", "botonGeneral");
    btnCancelar.setAttribute("class", "otraclase");
    btnCancelar.textContent = "Cancelar";

    agregarListenerIngreso();
}

function agregarListenerIngreso() {
    btnGuardar.addEventListener('click', () => {
        console.log("Se agregó la palabra " + inputPalabra.value);
        agregarPalabra(inputPalabra.value);
        vistaNuevaPartida();
        vistaNuevaPartida();
    });
    btnCancelar.addEventListener('click', () => {
        vistaPrincipal();
    });
}

function vistaNuevaPartida() {
    limpiarPantalla();
    juego = crearElemento("section", "partida", principal);
    dibujo = crearElemento("div", "dibujo", juego);
    canvas = crearElemento("canvas", "", dibujo);
    canvas.setAttribute("width", "294");
    canvas.setAttribute("height", "360");
    iniciarPincel(canvas);
    
    crearBotonesPartida();

}

function crearBotonesPartida() {
    var btnsDoble = crearElemento("div", "botonesDoble botonesJuego", juego);
    btnNuevaPartida = crearElemento("button", "nuevaPartida botonAzul", btnsDoble);
    btnNuevaPartida.setAttribute("id", "botonGeneral");
    btnNuevaPartida.textContent = "Nueva Partida";

    btnAbandonar = crearElemento("button", "abandonar botonTransparente", btnsDoble);
    btnAbandonar.setAttribute("id", "botonGeneral");
    btnAbandonar.textContent = "Abandonar";

    agregarListenerPartida();
}

function agregarListenerPartida() {
    btnNuevaPartida.addEventListener('click', () => {
        nuevaPartida();
    });
    btnAbandonar.addEventListener('click', () => {
        abandonar();
        vistaPrincipal()
    });

    document.addEventListener('keyup', (event) => {
        verificarTecla(event);
    });
}

function iniciarPincel(canvas) {
    pincel = canvas.getContext("2d");
    pincel.beginPath();
    pincel.lineWidth = 4;
    pincel.strokeStyle = "#0A3871";
}

function dibujar(coordenada) {
    var yi = coordenada[1];
    var xi = coordenada[0];
    var xf = coordenada[2];
    var yf = coordenada[3];
    var rad = coordenada[4];
    if (rad == 0) {
        pincel.moveTo(xi, yi);
        pincel.lineTo(xf, yf);
        pincel.stroke();
    } else {
        pincel.arc(xi, yi, rad, xf, yf, true);
        pincel.stroke();
    }
}

/* function prueba() {
    var pincel = document.querySelector("canvas").getContext("2d");
    pincel.beginPath();
    pincel.lineWidth = 4;
    pincel.strokeStyle = "#0A3871";
    var coordenadas = [
        [0, 358, 294, 358, 0],
        [80, 360, 80, 0, 0],
        [80, 2, 258, 2, 0],
        [258, 0, 258, 50, 0],
        [258, 80, -(Math.PI) / 2, 1.5 * Math.PI, 30],
        [258, 110, 258, 245, 0],
        [258, 245, 293, 280, 0],
        [258, 245, 223, 280, 0],
        [258, 110, 293, 145, 0],
        [258, 110, 223, 145, 0]
    ];

    coordenadas.forEach(function (coordenada) {
        var yi = coordenada[1];
        var xi = coordenada[0];
        var xf = coordenada[2];
        var yf = coordenada[3];
        var rad = coordenada[4];
        if (rad == 0) {
            pincel.moveTo(xi, yi);
            pincel.lineTo(xf, yf);
            pincel.stroke();
        } else {
            pincel.arc(xi, yi, rad, xf, yf, true);
            pincel.stroke();
        }
    });

} */

vistaPrincipal();




