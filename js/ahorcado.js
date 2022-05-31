/* function iniciar(){

}

function agregarPalabra(){

}

function guardar(){

}

function cancelar(){

}

function crearTablero(){
} */

var pantalla = document.querySelector(".grafico");
var pincel = pantalla.getContext("2d");
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
});











