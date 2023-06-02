/* Funções de conversões graus para Fahrenheit */

function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);

alert("A temperatura é de " + x + " graus celsius");