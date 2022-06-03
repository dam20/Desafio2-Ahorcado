var palabras = ["ALURA", "AHORCADO", "DESAFIO", "JUEGO"];
var palabraSorteada="";
var palabra = [];
var letrasErroneas =[];
var intentosRestantes = 8;
var enJuego = false;

const horca = [
    [453, 396, 747, 396, 0],
    [533, 396, 533, 38, 0],
    [533, 38, 711, 38, 0]
];
const cuerda = [711, 38, 711, 88, 0];
const cabeza = [711, 118, -(Math.PI) / 2, 1.5 * Math.PI, 30];
const cuerpo = [711, 148, 711, 283, 0];
const piernaD = [711, 283, 746, 318, 0];
const piernaI = [711, 283, 676, 318, 0];
const brazoD = [711, 148, 746, 183, 0];
const brazoI = [711, 148, 676, 183, 0];


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
            letrasErroneas.push(l);
            //console.log("probarLetra:" + letrasErroneas);
            escribirLetraIncorrecta(l,letrasErroneas.length);
            error();
        }
    }else{
        alert("La letra " + l + " ya fue usada");
    }
}

function letraUsada(l){
    //console.log(palabra.includes(l));
    //console.log(letrasErroneas.includes(l));
    
    return (palabra.includes(l)||letrasErroneas.includes(l));
}

function colocarLetra(l){
    for(var pos = 0; pos < palabraSorteada.length; pos++){
        if(palabraSorteada[pos] == l){
            palabra[pos] = l;
            escribirLetraCorrecta(l,pos);
        }
    }
    //console.log(palabra);
}

function probarPalabra(){
    if(palabraSorteada==palabra.join('')) ganador(); //como palabra es un array, lo convertimos a string con join
}

function verificarTecla(event){
    if (enJuego) {    //si esta en juego
        //console.log("VerificarTecla");
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
    reestablecer();
}
function perdedor(){
    console.log("Usted Perdio!!!");
    enJuego=false;
    reestablecer();
}

function error(){
    intentosRestantes--;
    switch (intentosRestantes) {
        case 7:
            console.log("Quedan " + intentosRestantes + " intentos.");
            horca.forEach(function (coordenada) {
                dibujar(coordenada);
            });
            break;
        case 6:
            console.log("Quedan " + intentosRestantes + " intentos.");
            dibujar(cuerda);
            break;
        case 5:
            console.log("Quedan " + intentosRestantes + " intentos.");
            dibujar(cabeza);
            break;
        case 4:
            console.log("Quedan " + intentosRestantes + " intentos.");
            dibujar(cuerpo);
            break;
        case 3:
            console.log("Quedan " + intentosRestantes + " intentos.");
            dibujar(piernaD);
            break;
        case 2:
            console.log("Quedan " + intentosRestantes + " intentos.");
            dibujar(piernaI);
            break;
        case 1:
            console.log("Quedan " + intentosRestantes + " intentos.");
            dibujar(brazoD);
            break;
        case 0:
            enJuego = false;
            dibujar(brazoI);
            perdedor();
            break;
    }
}

function nuevaPartida(){
    sortearPalabra();
    enJuego = true;
    return palabraSorteada.length;
}

function reestablecer(){
    //console.log("reestablecer: " + letrasErroneas);
    palabraSorteada="";
    palabra = [];
    letrasErroneas =[];
    intentosRestantes = 8;
    enJuego = false;
    //console.log("Reestablecido" + letrasErroneas);
}

function agregarPalabra(palabra){
    palabras.push(palabra.toUpperCase());
    //console.log(palabras);
}
function abandonar(){
    reestablecer();

}