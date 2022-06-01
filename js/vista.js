var principal = document.querySelector("main");
var inicio = document.querySelector(".inicio");
var ingreso = document.querySelector(".ingreso");
var juego = document.querySelector(".juego");
var inputPalabra = document.querySelector(".palabra");

var btnIniciarJuego = document.querySelector(".iniciarJuego");
var btnNuevaPalabra = document.querySelector(".nuevaPalabra");
var btnGuardar = document.querySelector(".guardarEmpezar");
var btnCancelar = document.querySelector(".cancelar");
var btnNuevaPartida = document.querySelector(".nuevaPartida");
var btnAbandonar = document.querySelector(".abandonar");


function crearElemento(tipo, clase, padre) {
    var elemento = document.createElement(tipo);
    elemento.setAttribute("class",clase);
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

function agregarListenerInicio(){
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
    crearElemento("p", "", aclaracion).innerHTML="Max. 8 letras";
    
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

function agregarListenerIngreso(){
    btnGuardar.addEventListener('click', () => {
        console.log("Se agregó la palabra " + inputPalabra.value);
        agregarPalabra(inputPalabra.value);
    });
    btnCancelar.addEventListener('click', () => {
        cancelar();
    });
}

function vistaNuevaPartida() {
    limpiarPantalla();
    juego = crearElemento("section", "partida", principal);
    dibujo = crearElemento("div","dibujo", juego);
    canvas = crearElemento("canvas", "", dibujo);

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

function agregarListenerPartida(){
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

vistaPrincipal();




