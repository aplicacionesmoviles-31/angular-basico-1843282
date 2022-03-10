z = 0;

function suma(x,y) {
    z = x + y;

    console.log(z);
}

function saludar() {
    alert("Hola,mundo");
}

//DOM //
var btnSumar = document.getElementById("btnSumar");
var btnSaludar = document.getElementById("btnSaludar");
var ejemploTxt = document.getElementById("ejemploTxt");
var texto = "";

btnSaludar.addEventListener("click",function(){
    console.log("Hola- Soy un event listener");

    //btnSaludar.style.backgroundColor = "red" //
if (btnSaludar.classList.contains("bgRed")){
    btnSaludar.classList.remove("bgRed");
}else {
    btnSaludar.classList.add("bgRed");
}
});



ejemploTxt.addEventListener("focus", function(){
    console.log("A escribir...");
});

ejemploTxt.addEventListener("keypress", function() {  
    texto = ejemploTxt.value;
    console.log(texto);
});

function testImprimir() {
    console.log("Escribiendo...");
}

function imprimirTexto() {
    var texto = ejemploTxt.value;
    console.log(texto);
}





