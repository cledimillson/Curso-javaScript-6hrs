// Funções
function soma(valor1, valor2) {
    return valor1 + valor2;
}

// Funções de contação do dolar

function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

alert("O valor em real é R$: " + valorReal + " O valor do Dolar é U$: " + total);