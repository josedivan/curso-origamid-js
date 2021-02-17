var menu = {
  wiidth: 800,
  height: 50,
  background: "#84e",
};

menu.background = "#567";
menu.color = "#blue";

menu.background = "#fff";
menu.color = "Blue";

menu.esconder = function () {
  console.log("escondi");
};
// Obs: Objeto tem acesso as variaveis que foram criados fora dele. O this que pega o valor do objeto.

// EXERCÍCIO:
// crie um objeto com seus dados pessoais:
var dadosPessoais = {
  nome: "Edivan",
  CPF: 192255294,
  sobreNome: "Lima",
  dinheiroNaConta: 100000,
};
// crie um método no objeto anterior, que mostre seu nome completo:
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobreNome}`;
};

// modifique o valor da propriedade preço para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
// crie um objeto de cachorro que represente um labrador
// preto com 10 anos, que late ao ver um homem
// Se o cachorro late, é um metódo ou seja uma função executa alguma coisa.

var cachorro = {
  raca: "labrador",
  cor: "Preto",
  ano: "10 anos",
  latir(pessoa) {
    if (pessoa === "Homem") {
      return "Latiu";
    } else if (pessoa === "Mulher") {
      return "Não latiu";
    }
  },
};

carro.preco = 3000;

console.log(cachorro.latir("Homem"));
