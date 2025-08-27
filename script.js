document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessbilidade = document.getElementById('botao-acessibilidade')
    const opçoesDeAcessbilidade = document.getElementById('opçoes-acessibilidade')
    const alternaContraste = document.getElementById('alterna-contraste')

    botaoDeAcessbilidade.addEventListener("click", function(){
        botaoDeAcessbilidade.classList.toggle('rotaçao-botao');
        opçoesDeAcessbilidade.classList.toggle('apresenta-lista');
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })  

    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })

})