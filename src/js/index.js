const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');


listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
       
        esconderCartao();
        const idPokedevSelecionado = mostrarCartaoSelecionado(pokedev);
        desativarPokedevNaListagem();
        ativarPokedevNaListagem(idPokedevSelecionado);
    })
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add('ativo');
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector('.ativo');
    pokedevAtivoNaListagem.classList.remove('ativo');
}

function mostrarCartaoSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDeCartaoPokedevParaAbrir = 'cartao-' + idPokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDeCartaoPokedevParaAbrir);
    CartaoPokedevParaAbrir.classList.add('aberto');
    return idPokedevSelecionado;
}

function esconderCartao() {
    const cartaoPokedevAberto = document.querySelector('.aberto');
    cartaoPokedevAberto.classList.remove('aberto');
}
