/* funcion que encriptara el texto */
function encriptarTexto() {
    var texto = document.getElementById("textoInput").value.toLowerCase();
    /* La i es para que afecte a mayusculas y minusculas
    La g es para que afecte a la linea escrita (oracion)
    La m es para que afecte a varias lineas escritas (parrafo) */
    var textoEncriptado = texto.replace(/e/igm, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

    document.getElementById("muñeco1").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiarTexto").style.display = "show";
    document.getElementById("copiarTexto").style.display = "inherit";


}
/* funxion que desencripta el texto */
function desencriptarTexto() {
    var texto = document.getElementById("textoInput").value.toLowerCase();
    /* La i es para que afecte a mayusculas y minusculas
    La g es para que afecte a la linea escrita (oracion)
       La m es para que afecte a varias lineas escritas (parrafo) */
    var textoEncriptado = texto.replace(/enter/gim, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");

    document.getElementById("muñeco1").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiarTexto").style.display = "show";
    document.getElementById("copiarTexto").style.display = "inherit";
}

function copiarContenido(){
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
}