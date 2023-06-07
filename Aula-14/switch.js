/* SWITCH
É usado para realizar diferentes ações com base em diferentes condiçãoes no 
mesmo bloco de verificação.
Caso a condição não seja compativel não será executado
e o valor padrão será acionado.
 */
function verificarCor() {
    let cor = document.getElementById("cor").value;

    switch (cor) {
    case "azul":
            // o que acontece
            document.body.style.backgroundColor = "blue";
            break;
        case "verde":
            // o que acontece
            document.body.style.backgroundColor = "green";
            break;
        case "amarelo":
            // o que acontece
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: " + cor;
    }
}
