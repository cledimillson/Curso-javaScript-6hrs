/* Eventos de tempo com javascript
- Os eventos de tempo permitem a execução em intervalo de tempo
especificados.
- Os dois métodos-chaves para usar com javascript são:
- setTimeout(function, tempo em milisegundos)
--> Executa uma função, depois de esperar um número especificado de milissegundos.

- setInteval(function, milissegundos)
--> É o mesmo que setTimeout(), mas repete a exercução da função continuamente.

*/

function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Comecou a contar!";
    // Ativa a função apenas 1 vez quando der o tempo especificado.
    setTimeout(function () {
        document.body.style.backgroundColor = "red";
    }, 1000);
}
