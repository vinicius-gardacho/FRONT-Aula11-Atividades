const paragrafo = document.getElementById("paragrafo")
const botaoTexto = document.getElementById("botao-texto")
const botaoFundo = document.getElementById("botao-fundo")

botaoTexto.addEventListener("click", function(){
    paragrafo.style.color = paragrafo.style.color == "black" ? paragrafo.style.color = "red" : paragrafo.style.color = "black"
})

botaoFundo.addEventListener("click", function(){
    document.body.style.backgroundColor = document.body.style.backgroundColor == "white" ? document.body.style.backgroundColor = "blue" :  document.body.style.backgroundColor = "white"
})