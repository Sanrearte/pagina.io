function calcular() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var operacion = document.getElementById("operaciones").value;
    var result;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("no se pueden operar letras");
        return;
    }

    if (operacion == "suma") {
        result = num1 + num2;
    }

    if (operacion == "resta") {
        result = num1 - num2;
    }

    if (operacion == "multiplicar") {
        result = num1 * num2;
    }

    if (operacion == "dividir") {
        result = num1 / num2;
    }

    document.getElementById("resultado").innerText = result;
}

function borrar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("e1").value = "";
    document.getElementById("e2").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function mayor(){
    var nom1=document.getElementById("n1").value;
    var nom2=document.getElementById("n2").value;
    var edad1=document.getElementById("e1").value;
    var edad2=document.getElementById("e2").value;
    var mensaje;

    edad1=parseInt(edad1);
    edad2=parseInt(edad2);

    if(edad1>edad2){

        mensaje=nom1+" Es el Mayor";

    }else if (edad2>edad1){

        mensaje=nom2+" Es el Mayor";

    }else{

        mensaje="Las edades son Iguales";

    }

    document.getElementById("resultado").innerHTML=mensaje;

}

function verificar(){
    var opcion1=document.getElementById("hombre").checked;
    var opcion2=document.getElementById("mujer").checked;
    var opcion3=document.getElementById("nino").checked;
    var opcion4=document.getElementById("nina").checked;

    if(opcion1 || opcion2){

        alert("seleccionaste un nombre o una mujer");

    }

}