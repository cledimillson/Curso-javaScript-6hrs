/* ARRAYS
    - Os arrays javascript --> São usados para armazenar vários valores
    - em um única variavel.
    - Diferente dos objetos, que funcionam com propriedades ou "nomes" 
que você dá para os itens dentro dele, os arrays não possuem propriedades.
    - O item dentro dele é encontrado pela posição.
    - Imagina um array com uma lista de itens, com controle, por ordem de
posição dentro dele.
    - EX: const lista = ["arroz", "feijão", "macarrão", "leite"];
    - A lista[0] (lista na posição 0) vai conter o valor "arroz".
    - A lista[1] (lista na posição 1) vai vai conter o valor "feijão"

    -- E assim por diante.
*/

const pessoa = ["Dimitri", "Santos", 40, "Professor"]; //array

const numeros = [40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);

//alert(Array.isArray(pessoa));

//document.getElementById("Teste").innerHTML = pessoa;

document.getElementById("Teste").innerHTML = maior20;

functionfiltragem(value, index, Array) {
    return value > 20;
}