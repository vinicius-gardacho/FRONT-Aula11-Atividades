const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    titulo.innerText = titulo.innerText == "Outra coisa" ? titulo.innerText = "Futebol" : titulo.innerText = "Outra coisa"
})