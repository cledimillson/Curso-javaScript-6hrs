let contador = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {

    // Pegar o valor digitado no input
    let valorInput = input.value;

    // Se não for vazio, nem nulo, nem indefinido
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i class="mdi mdi-circle-outline"></i>

        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>

    </div>`;

    // Adicionando novo item no campo
    main.innerHTML += novoItem;

    // Zerar os campos
    input.value = ""
    input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id)

input.addEventListener("keyup", function(event) {
    // Se teclou ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});