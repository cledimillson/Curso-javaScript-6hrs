/* OBJETOS
Objetos -> São basicamente variáveis com muitos valores dentro. 
EX: const carro = {marca: "Ford", modelo: "ka", ano: 2015}
Os valores dentro de um objeto são chamados propriedades.
Objetos --> também podem ter métodos.
Um método é uma função colocadas dentro de uma propriedade. */

const carro = {
    marca: "ford",
    modelo: "fiesta",
    ano: 2023,
    placa: "abc123",
    buzina: function() {
        alert("Biiiiiiiiii")
    },
    completo: function() {
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo

    }
};

console.log(carro.completo());