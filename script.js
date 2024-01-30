alert('Boas vindas ao nosso site');

let name = 'Lua';

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

let nomeUsuario = prompt('Qual o seu nome?');
let idadeNova = prompt('Qual a sua idade');

if (idadeNova >= 18) {
    alert(`Parabéns ${nomeUsuario}, você já pode dar entrada na sua carteira de habilitação!`);
} else {
    alert(`${nomeUsuario}, infelizmente você ainda não pode dar entrada na sua carteira de habilitação.`);
}
