const paragrafo = document.getElementById("paragrafo")
const botaoTexto = document.getElementById("botao-texto")
const botaoFundo = document.getElementById("botao-fundo")

botaoTexto.addEventListener("click", function(){
    
    if(paragrafo.style.color == "black"){
        paragrafo.style.color = "red"
    } else{
        paragrafo.style.color = "black"
    }
})

botaoFundo.addEventListener("click", function(){
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "blue"
    } else{
        document.body.style.backgroundColor = "white"
    }
})