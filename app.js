// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';

//Ctrl+K - Ctrl+C Comentar várias linhas

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
function gerarNumeroAleatorio (){
    return parseInt(Math.random()*100)+1;
}
let numeroSecreto= gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
let tentativas=3;
function verificarChute() {
    let chute = parseInt (document.querySelector('input').value);
    if (tentativas===0){
        exibirTextoNaTela ('h1','Suas tentativas acabaram!')
        exibirTextoNaTela ('p','O número secreto era '+ numeroSecreto);
    }else{
        tentativas--;
        let palavraTentativa = tentativas===1?'tentativa':'tentativas';
        if(chute===numeroSecreto) {
            exibirTextoNaTela('p', 'Parabéns,você acertou!');
        } else if(chute > numeroSecreto) {
            exibirTextoNaTela('p',`Errou! O número secreto é menor.Você ainda tem ${tentativas} ${palavraTentativa}.`);
        } else {
            exibirTextoNaTela('p',`Errou! O número é maior.Você ainda tem ${tentativas} ${palavraTentativa}.`);
        }
    }
}