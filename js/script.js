const controleClassificacao = document.querySelectorAll("[data-classificacao]");
var paragrafo = document.querySelector(".container__paragrafo--congratulations");
controleClassificacao.forEach(controle  => {
    controle.addEventListener("click", (evento)=>{
       verificaSeBotaoFoiClicado(controle); 
       var alvo = evento.target.innerText;
        localStorage.setItem('valorDoClique', (alvo))
       enviaClassificacao();
    })
})


var valorDoClique = parseInt(localStorage.getItem('valorDoClique'));

if(paragrafo != null){
    exibeParagrafo(valorDoClique)
}

function verificaSeBotaoFoiClicado(controle) {
    let botao = document.querySelectorAll(".classificacao .container__classificacao-active");
    botao.length != 0 ? botao[0].classList.remove("container__classificacao-active") : botao.length;
    controle.classList.toggle("container__classificacao-active");
}

 function enviaClassificacao(alvo){
    const botao = document.querySelector("[data-botao]");
    botao.addEventListener("click", function(){
       window.location.href = "./congratulations.html";
    })
}

function exibeParagrafo (alvo){
   return paragrafo.innerText = `You selected ${alvo} out of 5`;
    
}
