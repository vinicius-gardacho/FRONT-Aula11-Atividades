// ATIVIDADE 5 (base da atividade 3)
// ==============================

// PARTE 1 — Criar função para adicionar tarefas
// → função responsável por criar o <li>
// → reutilizar código da atividade 3

// PARTE 2 — Evento do botão "Adicionar"
// → usar addEventListener
// → pegar valor do input
// → chamar função que cria o <li>
// → limpar o input

// PARTE 3 — Salvar dados no localStorage
// → criar função salvar()
// → percorrer todos os <li>
// → pegar o texto de cada item
// → guardar em uma lista (array)
// → transformar em JSON (JSON.stringify)
// → salvar no localStorage

// PARTE 4 — Carregar dados ao abrir a página
// → usar: document.addEventListener("DOMContentLoaded")
// → buscar dados do localStorage
// → transformar JSON em lista (JSON.parse)
// → recriar os <li> na tela

// PARTE 5 — Atualizar sempre que mudar
// → chamar salvar() ao:
//    - adicionar item
//    - Carregar a página


const botao = document.getElementById("botao")
let lista = document.getElementById("lista")
const texto = document.getElementById("inputTexto")

function atualizarEstiloConcluido(li, concluido) {
    if (concluido) {
        li.style.textDecoration = "line-through"
        li.style.color = "gray"
    } else {
        li.style.textDecoration = ""
        li.style.color = ""
    }
}

function criarItem(textoTarefa, concluido = false) {
    const li = document.createElement("li")
    const textoSpan = document.createElement("span")
    const botaoRemover = document.createElement("button")
    const botaoConcluir = document.createElement("button")

    textoSpan.textContent = textoTarefa
    li.appendChild(textoSpan)

    botaoRemover.textContent = "Remover"
    botaoConcluir.textContent = "Concluir"

    botaoRemover.addEventListener("click", function() {
        li.remove()
        salvar()
    })

    botaoConcluir.addEventListener("click", function() {
        const estaConcluido = li.style.textDecoration === "line-through"
        atualizarEstiloConcluido(li, !estaConcluido)
        salvar()
    })

    li.appendChild(botaoRemover)
    li.appendChild(botaoConcluir)

    atualizarEstiloConcluido(li, concluido)
    return li
}

botao.addEventListener("click", function() {
    const valor = texto.value.trim()
    if (valor === "") {
        return
    }

    const li = criarItem(valor)
    lista.appendChild(li)
    texto.value = ""
    salvar()
})

function salvar() {
    const itens = []
    const liElements = lista.querySelectorAll("li")

    liElements.forEach(function(li) {
        const textoSpan = li.querySelector("span")
        const concluido = li.style.textDecoration === "line-through"
        itens.push({
            texto: textoSpan ? textoSpan.textContent : "",
            concluido: concluido
        })
    })

    localStorage.setItem("item", JSON.stringify(itens))
}

document.addEventListener("DOMContentLoaded", function() {
    const itensSalvos = localStorage.getItem("item")
    if (itensSalvos) {
        const itens = JSON.parse(itensSalvos)
        itens.forEach(function(item) {
            const li = criarItem(item.texto, item.concluido)
            lista.appendChild(li)
        })
    }

    salvar()
})
