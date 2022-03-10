var z = 0;
function suma(x, y){
   z = x + y;
   console.log(z);
}
function saludar() {
    alert("Hola, mundo");
}
//DOM
var btnSumar = document.getElementById("btnSumar");
var btnSaludar = document.getElementById("btnSaludar");
var ejemploTxt = document.getElementById("ejemploTxt");

var texto = "";
/*
btnSaludar.addEventListener("click", function(){
   // console.log("holaaaaaa -- Event Listener");
  //btnSaludar.style.backgroundColor = "red";
  if (btnSaludar.classList.contains("bgRojo") ) {
      btnSaludar.classList.remove("bgRojo");
  }else {
      btnSaludar.classList.add("bgRojo");
  }
});
ejemploTxt.addEventListener("focus", function(){
    console.log("A escribir...");
});
ejemploTxt.addEventListener("keypress" , function(){
    texto = ejemploTxt.value;
    console.log(texto);
});*/

function testImprimir(){
    console.log("Escribiendo....")
}
function imprimirTexto() {
    var texto = ejemploTxt.value;
    console.log(texto);
}



//------------
var articuloTxt = document.getElementById("articulo");
var precioTxt = document.getElementById("precio");

var parrafoTotal = document.getElementById("parrafoTotal");

var precio = precioTxt.value;
var total = 0;

function calcularTotal() {
    precio = parseInt(precioTxt.value);
    total = total + precio;
    //console.log(total);

    parrafoTotal.innerText = "Total: " + total ;

    limpiarTextos();
}

function limpiarTextos() {
    articuloTxt.value = "";
    precioTxt.value = "";
}