
alert("Bienvenido a CALCULADORA ONLINE")
let operacion = prompt("Ingrese la operación que desea realizar (las opciones disponibles son SUMAR, RESTAR, MULTIPLICAR o DIVIDIR). Para salir ESC.");

while (operacion.toLowerCase() != "esc") {
    switch (operacion.toLowerCase()) {
    case "sumar":
        let num1 = parseInt(prompt("Ingrese el primer número"));
        let num2 = parseInt(prompt("Ingrese el segundo número"));
        let resSum = num1 + num2;
        alert (`El resultado es: ${resSum} (${num1}+${num2})`);
        break;
    case "restar":
        let num3 = parseInt(prompt("Ingrese el primer número"));
        let num4 = parseInt(prompt("Ingrese el segundo número"));
        let resRes = num3 - num4
        alert (`El resultado es: ${resRes} (${num3}-${num4})`);
        break;
    case "multiplicar":
        let num5 = parseInt(prompt("Ingrese el primer número"));
        let num6 = parseInt(prompt("Ingrese el segundo número"));
        let resMul = num5 * num6
        alert (`El resultado es: ${resMul} (${num5}*${num6})`);
        break;
    case "dividir":
        let num7 = parseInt(prompt("Ingrese el primer número"));
        let num8 = parseInt(prompt("Ingrese el segundo número"));
        let resDiv = num7 / num8
        alert (`El resultado es: ${resDiv} (${num7}/${num8})`);
        break;
    default:
        alert("Ingrese una operación válida");
        break;
      }
    operacion = prompt("Ingrese la operación que desea realizar (puede escribir SUMAR, RESTAR, MULTIPLICAR o DIVIDIR). Para salir ESC.");
    }







