const botao = document.getElementById("botao")
let lista = document.getElementById("lista")
const texto = document.getElementById("inputTexto")

botao.addEventListener("click", function() {
    let item = document.createElement("li")
    item.textContent = texto.value
    lista.appendChild(item)
    texto.value = ""
})