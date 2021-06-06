// Declarando as propriedades de objetos

var DadosPessoais = {
  nome: "Edivan ",
  idade: 31,
  sobrenome: "Lima",
  CPF: 128309188,
  profissao: "Desenvolvedor Front-end",
};

//console.log(DadosPessoais);
// This é o propro objeto declarado

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco(lado5) {
    posicao: 5;
    return lado5 * lado5;
  },
};

var nome = "Olá, eu sou Judith";
var idade = 33;

console.log(nome);
console.log(idade);

console.log(quadrado.area(3));
console.log(quadrado.perimetro(2));
console.log(quadrado.cinco(6));

// console.table mostra os dados em forma de tabela com os tipo de dados. Ex:
console.table(quadrado);
