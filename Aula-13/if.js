/* IF e ELSE */

function verificar() {
    let nome = document.getElementById("nome").Value;

    if (nome == "" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser em braco";
        p.style.color = "red";
    
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns tudo certo agora amigo.";
        p.style.color = "blue";
    }
}