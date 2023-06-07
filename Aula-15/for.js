/* Laço de repetição For
Laços oferecem um jeito facil e rápido de executar uma ação
repetidas vezes.
 */
var ano = new Date().getFullYear();
for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}