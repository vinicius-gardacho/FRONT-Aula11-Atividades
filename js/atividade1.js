const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    if (titulo.innerText == "Outra coisa") {
        titulo.innerText = "Futebol"
    } else{
        titulo.innerText = "Outra coisa"
    }
})