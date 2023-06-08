/**
 *  Manipulando datas em javascript
 */

// Pegara a gora do sistema
let data = new Date();
console.log(data)

// Pegar o ano .
let ano = data.getFullYear();
console.log(ano)

// Mostrar o mês no formato escrito
const mesesDoAno = ["Janeiro", "Fevereiro", "Março"];
let mesEscrito = mesesDoAno[data.getMonth()];

// Pegar dia do mes 1 ate 31
let diaMes = data.getDate();
console.log(diaMes)

// Pegar o dia da semana 0 até 6
let diaSemana = data.getDay();

//const diasDaSemana = ["Sefunda", "Terça", "Quarta"];
//let diaSemanaEscrito = diasDaSemana[Data.getDay()];
//console.log(diaSemanaEscrito);

// Pegar hora de 0 ate 12hrs
let hora = data.getHours();
console.log(hora);

// Pegar os minutos
let minutos = data.getMinutes();
console.log(minutos);

// Pegar data e gora do formato pt-br
let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR)

// Pegar os valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? "0" + x : '' + x; };
let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR)