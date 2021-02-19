//Exercício;
// Retorne o url da página atual utilizando o objeto window

var urlDaPagina = window.location.href;
console.log("Este é o Url da página", urlDaPagina);

// Seleciona o primeiro elemento da página que possua a classe ativo
const classAtiva = document.querySelector(".ativo");
console.log("Este é o titulo 2 da classe", classAtiva);
// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela
var lagura_lanela = window.innerWidth;
console.log("A largura da janela é ", lagura_lanela);
