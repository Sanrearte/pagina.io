function oper_aritmetica() {

    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var operacion = document.getElementById("operaciones").value;   
    var result;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if (isNaN(num1) || isNaN(num2)) { alert("Debe introducir numeros en la casilla"); }

    if (operacion == "suma") { result = num1 + num2; }

    if (operacion == "restar") { result = num1 - num2; }

    if (operacion == "multiplicar") { result = num1 * num2; }

    if (operacion == "dividr") { result = (num1 / num2); }

    document.getElementById("resultado1").innerHTML = result;
}

function mayor() {

    var num1 = document.getElementById("edad1").value;
    var num2 = document.getElementById("edad2").value;
    var nomb1 = document.getElementById("nombre1").value;
    var nomb2 = document.getElementById("nombre2").value;
    var mayor;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 > num2) {

        mayor = "El mayor es: " + nomb1;
        document.getElementById("resultado2").innerHTML = mayor;
    }

    else if (num2 > num1) {

        mayor = "El mayor es: " + nomb2;
        document.getElementById("resultado2").innerHTML = mayor;
    }

    else if (num1 = num2) {

        mayor = "Tienen la misma edad";
        document.getElementById("resultado2").innerHTML = mayor;
    }
}

function comparar() {

    var opcion1 = document.getElementById("Hombre").checked;
    var opcion2 = document.getElementById("Mujer").checked;
    var opcion3 = document.getElementById("Nino").checked;
    var opcion4 = document.getElementById("Nina").checked;
    var contador = 0;

    if (opcion1) {

        alert("Sos hombre");
        contador++;
    }

    else if (opcion2) {

        alert("Sos mujer");
        contador++;
    }

    else if (opcion3) {

        alert("Sos nino");
        contador++;
    }

    else if (opcion4) {

        alert("Sos nina");
        contador++;
    }

    else if (contador > 1) { alert("seleccione solo 1"); }

    if (opcion1) {

        alert("Sos hombre");
        contador++;
    }

    else if (opcion2) {

        alert("Sos mujer");
        contador++;
    }

    else if (opcion3) {

        alert("Sos nino");
        contador++;
    }

    else if (opcion4) { contador++; }
}

function borrar() {

    document.getElementById("n1").value = "";
    document.getElementById("nombre1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("nombre2").value = "";
    document.getElementById("resultado").innerHTML = "";
}