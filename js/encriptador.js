function encriptar() {
    var texto = document.querySelector(".mensaje").value;
    //console.log(texto);
    texto = texto.replaceAll("e","enter");
    texto = texto.replaceAll("i","imes");
    texto = texto.replaceAll("a","ai");
    texto = texto.replaceAll("o","ober");
    texto = texto.replaceAll("u","ufat");
    mostrarResultado(texto);
}
function desEncriptar() {
    var texto = document.querySelector(".mensaje").value;
    //console.log(texto);
    texto = texto.replaceAll("ufat","u");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ai","a");
    texto = texto.replaceAll("imes","i");
    texto = texto.replaceAll("enter","e");
    mostrarResultado(texto);
}

function mostrarResultado(texto) {
    var noMensaje = document.querySelector(".noMensaje");
    noMensaje.classList.add("invisible");
    noMensaje.classList.remove("visible");
    var mensajeResultado = document.querySelector(".mensajeResultado");
    mensajeResultado.classList.add("visible");
    mensajeResultado.classList.remove("invisible");
    var txtResultado = document.querySelector(".txtResultado");
    txtResultado.textContent = texto;
}

function copiar(){
    var txtResultado = document.querySelector(".txtResultado").value;
    navigator.clipboard.writeText(txtResultado).then(() => {
        alert("El mensaje encriptado se copio al portapapeles!!!");
    });
}