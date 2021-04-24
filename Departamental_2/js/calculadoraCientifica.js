//Variables que usemos en todas las funciones

function presionaDigito(digito) {
    var display     = document.getElementById("display");
    display.value   = display.value + digito;
}

function limpiaDisplay(){
    var display = document.getElementById("display");
    display.value="";
}

function presionaOperador(operador){
    var display = document.getElementById("display");
    display.value = display.value + operador;
}

function presionaIgual(){
    var display = document.getElementById("display");
    //usar la funcion eval
    var resultado = eval(display.value);
    //mostramos el resultado
    display.value = resultado;
}

function calcularRaiz(){
    var display = document.getElementById("display");
    display.value = Math.sqrt(eval(display.value));
}

function calcularLogaritmo(){
    var display = document.getElementById("display");
    display.value = Math.log10(eval(display.value));
}

function calcularLogaritmoNatural(){
    var display = document.getElementById("display");
    display.value =  Math.log(eval(display.value)); 
}

//aqui usamos la funcion prompt para ingresar el otro valor. ejemplo: 5% de 10, el promp es para guardar el 10.
function calcularPorcentaje(){
    var porciento = prompt("Ingrese la cantidad a la que desea obtener el porcentaje: ", "");
    var display = document.getElementById("display");
    display.value = Math.floor(eval(display.value)*porciento)/100;
}

//aqui usamos la funcion prompt para ingresar el exponente al cual se estara elevando el numero.
function calcularElevado(){
    var exponente = prompt("Ingrese el exponente: ", "");
    var display = document.getElementById("display");
    display.value = Math.pow(eval(display.value),exponente);
}

function calcularFactorial(){
	var factorial = 1;
        for (var i=1; i <= document.getElementById ("display").value; i++){
            factorial *= i;
        }
 
        display.value = document.getElementById ("display").value = factorial;
}



