/* EVENTOS
Eventos são ações disparadas pela interação dos usuários na pagina.
É o correto manejo desses eventos que se tornam as páginas interatias e dinâmica.

Existem muitos eventos. Veja os mais utilizados:

onclick       -> Disparado quando recebe um click.
ondblclick    -> Disparado quando clique duplo.
onmouseseover -> Dispara quando o mouse está sobre.
onmouseout    -> Dispara quando o mouse é movido para fora do elemento.
onmousemove   -> Dispara quando o mouse é movido no elemento.
onmousedown   -> Disparado quando clique do botão for presionado.
onmouseup     -> Disparado quando o clique do mouse é liberado.
onfocus       -> Disparado quando o elemento recebe o foco, Válido para input.
onchange      -> Disparado quando existe uma mudança no conteudo, "Ao mudar".
onblur        -> Disparado quando o elemento perde o foco.
onkeydown     -> Disparado quando uma tecla e presionada.
onkeypress    -> Disparada quando uma tecla e presionada e solta.
onkeyup       -> Disparado quando uma tecla e solta sobre um elento.
onload       -> disparado quando a página terminou de ser carregada. body.
onresize     -> disparda quando h´q um redicionamento da janela.

*/

function eventoClick() {
    // Mudando a cor do fundo da página
    document.body.style.backgroundColor = "Green";
}

function eventoDblClick() {
   // alert("Duplo Click")
    document.body.style.backgroundColor = "white";
}

function eventoOverClick() {
   // alert("Mouse sobre")
   document.body.style.backgroundColor = "Blue"
}

function eventoOutClick() {
    alert("Mouse fora do elemento")
}

function eventoMoveClick() {
    //alert("movido no elemento")
    document.body.style.backgroundColor = "gray";
}

function eventodowClick() {
    //alert("Teste down")
    document.body.style.backgroundColor = "pink"
}

function eventoUpClick() {
   // alert("Mouse up")
   document.body.style.backgroundColor = "purple"
}

function eventoFocusClick() {
    //alert("Focus")
    document.body.style.backgroundColor = "orange"
}

function eventochangeClick() {
    alert("OnChanger")
}

function eventoOnblurClick() {
    alert("Onblur")
}

function eventokeyClick() {
   // alert("Onkeydown")
    document.body.style.backgroundColor = "blue"
}

function eventokeypressClick() {
    document.body.style.backgroundColor = "red"
}

function eventoKeyUpClick() {
    alert("OnkeyUp")
}

function eventoLoadClick() {
    alert("OnLoad")
    //document.body.style.backgroundColor = "red"
}

function eventoOnSizeClick() {
    alert("Teste Onresize")
}