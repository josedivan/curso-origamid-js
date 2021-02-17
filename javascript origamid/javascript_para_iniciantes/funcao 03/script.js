function ValorRetornado(numero) {
  var numero = "3";
  if (numero == 3) {
    return (valorIgual = true);
  }
  if (numero != 3) return (valorIgual = false);
}
console.log(ValorRetornado());

// Crie uma função que retorne o perimetro de um quadrado
function perimetroQuadeado(lado) {
  ladoQuadrado = lado * 4;
  return ladoQuadrado;
}
console.log(perimetroQuadeado(2));

// crie uma função que retorne seu nome completo

function nomeCompeto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompeto("Edivan", "Lima"));

// Crie uma função que verifica se o número é par
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    console.log("É Par!");
    return true;
  } else {
    console.log("É impar");
    return false;
  }
}
console.log(isEven(3));

var idade = prompt("Quantos anos você tem?");
var dias = idade * 365;
document.write("Você já viveu " + dias + " dias de vida");
// crie uma função que retorne um tipo de dado do argumento passado nela.

function tipoDados(dados) {
  return typeof dados;
}

console.log(tipoDados(1));
