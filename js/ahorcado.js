var palabras = ["ALURA", "AHORCADO", "DESAFIO", "JUEGO"];
var palabraSorteada="";
var palabra = [];
var letrarErroneas =[];
var intentosRestantes = 8;
var enJuego = true;

function sortearPalabra(){
    palabraSorteada=palabras[sortearNro()];
    console.log("La palabra es: " + palabraSorteada);
    return palabraSorteada;
}

function sortearNro(){
    return Math.floor(Math.random()*palabras.length);
}

function probarLetra(l){
    if(!letraUsada(l)){ //si la letra no se uso
        if(palabraSorteada.includes(l)){
            colocarLetra(l);
            probarPalabra();
        }else{
            letrarErroneas.push(l);
            error();
        }
    }else{
        alert("La letra " + l + " ya fue usada");
    }
}

function letraUsada(l){
    return (palabra.includes(l)||letrarErroneas.includes(l));
}

function colocarLetra(l){
    for(var pos = 0; pos < palabraSorteada.length; pos++){
        if(palabraSorteada[pos] == l){
            palabra[pos] = l;
        }
    }
    console.log(palabra);
}

function probarPalabra(){
    if(palabraSorteada==palabra.join('')) ganador(); //como palabra es un array, lo convertimos a string con join
}

function verificarTecla(event){
    if (enJuego) {    //si esta en juego
        var keyCode = event.code;
         if (keyCode.includes('Key') //si la tecla presionada es una letra
         || keyCode.includes('Semicolon') // la letra ñ la toma como Semicolon
         ) {
            probarLetra(event.key.toUpperCase()); // le pasamos la letra presionada en mayuscula como parametro
        }
    }
}

function ganador(){
    console.log("Usted Gano!!!");
    enJuego=false;

}

function error(){
    intentosRestantes--;
    switch (intentosRestantes) {
        case 7:
            console.log("Quedan " + intentosRestantes + " intentos.");
            break;
        case 6:
            console.log("Quedan " + intentosRestantes + " intentos.");
            break;
        case 5:
            console.log("Quedan " + intentosRestantes + " intentos.");
            break;
        case 4:
            console.log("Quedan " + intentosRestantes + " intentos.");
            break;
        case 3:
            console.log("Quedan " + intentosRestantes + " intentos.");
            break;
        case 2:
            console.log("Quedan " + intentosRestantes + " intentos.");
            break;
        case 1:
            console.log("Quedan " + intentosRestantes + " intentos.");
            break;
        case 0:
            enJuego = false;
            console.log("Quedan " + intentosRestantes + " intentos.");
            break;
    }
}

function nuevaPartida(){
    reestablecer();
    sortearPalabra();
}

function reestablecer(){
    palabraSorteada="";
    palabra = [];
    letrarErroneas =[];
    intentosRestantes = 8;
    enJuego = true;
}




function agregarPalabra(palabra){
    palabras.push(palabra.toUpperCase());
    console.log(palabras);
    nuevaPartida();
}
function abandonar(){
    enJuego = false;
}

/*
function guardar(){

}


function crearTablero(){
} */

/* var pincel = document.querySelector(".grafico").getContext("2d");
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
]

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
    }else{
        pincel.arc(xi, yi, rad, xf, yf, true);
        pincel.stroke();
    }
}); */









