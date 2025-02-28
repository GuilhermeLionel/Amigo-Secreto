//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [],
    chute,
    numeroTeste;

function limparCampo(){
    document.querySelector('input').value = ''
}

function escreverTela(tag, texto) {
  let campo = document.querySelector(tag);
      campo.innerHTML = texto
}

function adicionarAmigo() {
  let nomeAmigo = document.querySelector('input').value;
  amigos.push(nomeAmigo);
  exibirAmigos();
  limparCampo()
  if (nomeAmigo == ''){
    alert('Digite o nome de seu amigo no campo indicado.')
  }
}

function exibirAmigos() {
  let listaAmigos = '';
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos += `<li>${amigos[i]}</li>`;
  }
  escreverTela('ul', listaAmigos);
}

function removerAmigos(){
    amigos = []
}

function sortearAmigo() {
    numeroTeste = parseInt(Math.random()*amigos.length)
    let varAux = document.getElementById('resultado')
    varAux.innerHTML = `O ESCOLHIDO FOI: ${amigos[numeroTeste]}`
    removerAmigos()
    exibirAmigos()
}