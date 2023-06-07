/** Classe em javascript
 * 
 *  Em 2015 foi introduzido no javaScript as classes.
 *  As classes são um cenceito antigo em programação e várias linguagens utilizam elas.
 *  Mas no javaScript isso é relativamente novo, por isso mesmo programadores 
 * experientes não sabem muito bem utilizar.
 *  Basicamente, as classes são como "Fabricas" para criar objetos.
 *  Pode se dizer que são "funções especiais" para a criação de objetos.
 * 
 *  Assim como uma fábrica da vida real precisa das máquinas para construir os
 * objetos, as classes no javaScript usam um método chamado construtor() para
 * fabricar os objetos.
 */

class carro {
    constructor(valor1, valor2,valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzina: Biiiiiiiiiiiiiiiiiiiiii";
    }
}

const uno = new carro("Fiat", "uno", 2023);
const gol = new carro("Volkswagen", "gol", 20223);

console.log(uno);
console.log(gol.ano);
console.log(gol.buzina());