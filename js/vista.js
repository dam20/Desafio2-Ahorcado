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
    principal.lastChild.remove();
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
        vistaNuevaPartida(nuevaPartida());
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
    inputPalabra.focus();
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
        vistaNuevaPartida(nuevaPartida());
    });
    btnCancelar.addEventListener('click', () => {
        vistaPrincipal();
    });
}

function vistaNuevaPartida(cantidad) {
    limpiarPantalla();
    juego = crearElemento("section", "partida", principal);
    dibujo = crearElemento("div", "dibujo", juego);
    canvas = crearElemento("canvas", "", dibujo);
    canvas.setAttribute("width", "1200");
    canvas.setAttribute("height", "800");
    iniciarPincel(canvas);
    dibujarLineas(cantidad);
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
        vistaNuevaPartida(nuevaPartida());
    });
    btnAbandonar.addEventListener('click', () => {
        abandonar();
        document.removeEventListener('keyup', verificarTecla);
        vistaPrincipal();
    });

    document.addEventListener('keyup', verificarTecla);
}

function iniciarPincel(canvas) {
    pincel = canvas.getContext("2d");
    pincel.beginPath();
    pincel.lineWidth = 4;
    pincel.strokeStyle = "#0A3871";
}

function dibujar(coordenada) {
    var xi = coordenada[0];
    var yi = coordenada[1];
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

function dibujarLineas(cantidad){
    var tamaño = 50;
    var espacio = 8;
    var x = 600 - ((tamaño+espacio)*cantidad-espacio)/2;

    for(var i=0; i<cantidad; i++){
        var xi = x + i * (tamaño+espacio); //568+8=576 600
        pincel.moveTo(xi, 500);//576 600
        pincel.lineTo(xi+tamaño, 500);//584 608
        console.log("linea "+ i + " desde "+ xi + " hasta " + (xi+tamaño));
    }
    pincel.stroke();
}

function escribirLetraCorrecta(letra,indice){
    console.log("Letra: "+ letra + " posicion: "+ (600 - (58*palabraSorteada.length-8)+indice*58) + " index: "+ indice);
    pincel.font = "bold 50px Inter";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round"; 
    pincel.fillStyle = "#0A3871";
    var posicion = (600 - (58*palabraSorteada.length-8)/2+indice*58) + 8;
    pincel.fillText(letra, posicion, 480);
}
function escribirLetraIncorrecta(letra,indice){
    console.log("Letra: "+ letra + " posicion: "+ (600 - (46*palabraSorteada.length-6)/2+indice*46) + " index: "+ indice);
    pincel.font = "bold 30px Inter";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round"; 
    pincel.fillStyle = "#0A3871";
    var posicion = (600 - (55*8-6)/2+indice*46);
    pincel.fillText(letra, posicion, 580);
}


vistaPrincipal();




