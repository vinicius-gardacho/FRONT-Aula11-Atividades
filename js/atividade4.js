// ATIVIDADE 4 (base da atividade 3)
// ==============================

// Dentro do evento de adicionar item:

// 1. Criar o botão de remover
// → usar document.createElement()

// 2. Adicionar texto ao botão
// → exemplo: "Remover" ou "X"

// 3. Adicionar evento de clique no botão
// → quando clicar:
//    - remover o item da lista (li.remove())

// 4. Colocar o botão dentro do <li>
// → usar appendChild()

const botao = document.getElementById("botao")
let lista = document.getElementById("lista")
const texto = document.getElementById("inputTexto")

botao.addEventListener("click", function() {
    let li = document.createElement("li")
    let botaoRemover = document.createElement("button")
    let botaoConcluir = document.createElement("button")

    li.textContent = texto.value
    lista.appendChild(li)
    texto.value = ""

    botaoRemover.textContent = "Remover"
    botaoConcluir.textContent = "Concluir"

    botaoRemover.addEventListener("click", function() {
        li.remove()
    })
    li.appendChild(botaoRemover)

    botaoConcluir.addEventListener("click", function(){
        li.style.textDecoration = "line-through"
        li.style.color = "gray"
    })

    li.appendChild(botaoConcluir)
})