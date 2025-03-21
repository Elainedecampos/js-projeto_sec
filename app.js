<<<<<<< HEAD
//Comentar várias linhas vscodde Javascript Ctrl+K - Ctrl +C
//let titulo = document.querySelector('h1');
//titulo.innerHTML='Gatobô da adivinhação';
//let subtitulo = document.querySelector('p');
//subtitulo.innerHTML='Escolha um número entre 1 e 100';

exibirTextoNaTela ('h1','Gatobô da adivinhação');
exibirTextoNaTela ('p','Escolha um número entre 1 e 100');
function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
}
function verificarChute() {
    console.log('Apertou o botão');
}
=======
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    console.log('Apertou o botão');
}

//<h1>Jogo de adivinhação</h1>
//<p>Escolha um número entre 1 e 100</p>
>>>>>>> ed78fcbe0f71bbd87459d9d06682a62e04fd8bfb
