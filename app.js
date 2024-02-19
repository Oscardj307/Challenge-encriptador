
function ocultarMunieco () {
    var div = document.getElementById("divDelMunieco");
    div.style.display = "none";
    var imagen = document.getElementById("img_munieco");
    imagen.style.display = "none";
    return;
}

console.log(mensajeAProcesar);

function encriptarTexto () {

    
    if (mensajeAProcesar ="") {
        var alerta = document.getElementById('mensajeResultado');
          alerta.style.color = 'red';
        //   alerta.style.fontSize= '40px';
    } else{
        var mensaje = document.getElementById("mensajeAProcesar").value.toLowerCase();

var mensajeAProcesar = mensaje.replace(/e/img, "enter");
var mensajeAProcesar = mensajeAProcesar.replace(/o/img, "ober");
var mensajeAProcesar = mensajeAProcesar.replace(/i/img, "imes");
var mensajeAProcesar = mensajeAProcesar.replace(/a/img, "ai");
var mensajeAProcesar = mensajeAProcesar.replace(/u/img, "ufat");

 document.getElementById("mensajeResultado").innerHTML = mensajeAProcesar;

 ocultarMunieco();
 
    }
    console.log(mensajeAProcesar);
}

function desencriptarTexto () {

    if (mensajeAProcesar = "") {
        var alerta = document.getElementById('mensajeResultado');
          alerta.style.color = 'red';
    } else{
        var mensaje = document.getElementById("mensajeAProcesar").value.toLowerCase();
    
    var mensajeAProcesar = mensaje.replace(/enter/img, "e");
    var mensajeAProcesar = mensajeAProcesar.replace(/ober/img, "o");
    var mensajeAProcesar = mensajeAProcesar.replace(/imes/img, "i");
    var mensajeAProcesar = mensajeAProcesar.replace(/ai/img, "a");
    var mensajeAProcesar = mensajeAProcesar.replace(/ufat/img, "u");
    
     document.getElementById("mensajeResultado").innerHTML = mensajeAProcesar;

     ocultarMunieco();
     
    }
    console.log(mensajeAProcesar);
    }

    // function copiar (){
    //     var copyText = document.querySelector("#mensajeResultado");
    //     copyText.select();
    //     document.execCommand("Copy");

    // }
    function copiarAlPortapapeles() {
        var texto = document.getElementById('mensajeResultado').innerText;
        var elementoTemporal = document.createElement('textarea');
        elementoTemporal.value = texto;
        document.body.appendChild(elementoTemporal);
        elementoTemporal.select();
        document.execCommand('copy');
        document.body.removeChild(elementoTemporal);
      }

      function btnencriptar () {
        if (mensajeAProcesar = "Escribe el mensaje aqui") {
          var alerta = document.getElementById('mensajeResultado');
          alerta.style.color = 'red';
        } 
        return;
       } //Intentando crear una funcion que permita ocultar al munieco