// Objetivo 1 - quando clicar num botão da lista, marcar como selecionado.

// passo 1 - pegar os botões no JS pra poder verificar quando o usuario clicar no botão

const botoes = document.querySelectorAll('.botao');

// passo 2 - add a classe "selecionado" no botão q foi clicado e remover a q estava com essa classe

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        botao.classList.add("selecionado")

        desselecionarPersonagem();
        personagens[indice].classList.add("selecionado");
    });
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");

    botaoSelecionado.classList.remove("selecionado");
}
