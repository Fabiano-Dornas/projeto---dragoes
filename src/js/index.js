/* OBJETIVO- quando clicarmos no botão temos qua mostrar a imagem de fundo correspondente.
*/

//PASSO 1 - dar um jeito de pegar os elentos HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//PASSO 2 - dar um jeito de identificar o clique do usuário no botão 
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //PASSO 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //PASSO 4 - marcar o botão clicado como se tivesse selecionado
        marcarBotaoSelecionado(botao);

        //PASSO 5- esconder a imagen anteriormente ao botão clicado
        esconderImagemAtiva();

        //PASSO 6 - Fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);

        //PASSO 7 - esconder a informação do dragão anteriormente selecionado 
        esconderInformacoesAtivas();

        //PASSO 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarInformacoes(indice);
    });
});


function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

