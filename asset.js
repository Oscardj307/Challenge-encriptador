function encriptar () {
let texto = document.getElementById("mensajeAProcesar").value;
let titulo = document.getElementById("titulo");
let parrafo = document.getElementById("parrafo");
let munieco = document.getElementById("img_munieco");
let botoncopiar = document.getElementById("btnCopiar");

let textoencriptado = texto 
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");

if (document.getElementById("mensajeAProcesar").value.length != 0) {
    document.getElementById("mensajeAProcesar").value = textoencriptado;
    titulo.textContent = "Texto encriptado con exito!";
    parrafo.textContent = "";
    munieco.src = "./img/candado.png";
    botoncopiar.style.display = ("flex")


} else {
    titulo.textContent = "Ningun mensaje fue encontrado!";
    parrafo.textContent = "Ingresa el texto que deseas encriptar";
    munieco.src = "./img/Muñeco.png";
    botoncopiar.style.display = ("none")
    swal ("oops!", "Debes ingresar un mensaje!", "warning");
}
}

function desencriptar () {
    let texto = document.getElementById("mensajeAProcesar").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("img_munieco");
    let botoncopiar = document.getElementById("btnCopiar");
    
    let textoencriptado = texto 
                    .replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u");
    
    if (document.getElementById("mensajeAProcesar").value.length != 0) {
        document.getElementById("mensajeAProcesar").value = textoencriptado;
        titulo.textContent = "Texto desencriptado con exito!";
        parrafo.textContent = "";
        munieco.src = "./img/candado_abierto.png";
        botoncopiar.style.display = ("flex")
    
    } else {
        titulo.textContent = "Ningun mensaje fue encontrado!";
        parrafo.textContent = "Ingresa el texto que deseas encriptar";
        munieco.src = "./img/Muñeco.png";
        swal ("oops!", "Debes ingresar un mensaje!", "warning");
        botoncopiar.style.display = ("none")
    }
}


function copiarAlPortapapeles() {
    var texto = document.getElementById('mensajeAProcesar').value;
    var elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
  }