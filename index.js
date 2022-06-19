
alert("Bienvenido a CALCULADORA ONLINE")
let operacion = prompt("Ingrese la operación que desea realizar (las opciones disponibles son SUMAR, RESTAR, MULTIPLICAR o DIVIDIR)");

while (operacion.toLowerCase() != "esc") {
    switch (operacion.toLowerCase()) {
    case "sumar":
        num1 = parseInt(prompt("Ingrese el primer número"));
        num2 = parseInt(prompt("Ingrese el segundo número"));
        let resSum = num1 + num2;
        alert (`El resultado es: ${resSum} (${num1}+${num2})`);
        break;
    case "restar":
        num1 = parseInt(prompt("Ingrese el primer número"));
        num2 = parseInt(prompt("Ingrese el segundo número"));
        let resRes = num1 - num2
        alert (`El resultado es: ${resRes} (${num1}-${num2})`);
        break;
    case "multiplicar":
        num1 = parseInt(prompt("Ingrese el primer número"));
        num2 = parseInt(prompt("Ingrese el segundo número"));
        let resMul = num1 * num2
        alert (`El resultado es: ${resMul} (${num1}*${num2})`);
        break;
    case "dividir":
        num1 = parseInt(prompt("Ingrese el primer número"));
        num2 = parseInt(prompt("Ingrese el segundo número"));
        let resDiv = num1 + num2
        alert (`El resultado es: ${resDiv} (${num1}/${num2})`);
        break;
    default:
        alert("Ingrese una operación válida");
        break;
      }
    operacion = prompt("Ingrese la operación que desea realizar (puede escribir SUMAR, RESTAR, MULTIPLICAR o DIVIDIR)");
    }







