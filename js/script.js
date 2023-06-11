const controleClassificacao = document.querySelectorAll("[data-classificacao]");
controleClassificacao.forEach(controle => {
    controle.addEventListener("click", ()=>{
       verificaSeBotaoFoiClicado(controle); 
       enviaClassificacao();
         
    })
    
})


function verificaSeBotaoFoiClicado(controle) {
    let botao = document.querySelectorAll(".classificacao .container__classificacao-active");
    botao.length != 0 ? botao[0].classList.remove("container__classificacao-active") : botao.length;
    controle.classList.toggle("container__classificacao-active");
}

function enviaClassificacao(){
    const botao = document.querySelector("[data-botao]");
    botao.addEventListener("click", function(){
         window.location.href = "../page/congratulations.html";
    })
}