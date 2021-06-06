//Exercício;
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInterno = document.querySelectorAll('a[href^="#"]');
function handleLink(event) {
  event.preventDefault();

  linksInterno.forEach((link) => {
    link.classList.remove("ativo");
  });

  this.classList.add("ativo"); // adicionando uma classe ativo
}

linksInterno.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do
//body,
// ao clique mostre exatamente quais elementos estão sendo
//clicados

const todosElementos = document.querySelectorAll("body *");
function handleElemento(event) {
  //console.log(event.currentTarget);
}
todosElementos.forEach((elementos) => {
  elementos.addEventListener("click", handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no
//console,
// remova o elemento que está sendo clicado, o método remove()
//remove um elemento

//const todosElementos = document.querySelectorAll("body *");
//function handleElemento(event) {
//  event.currentTarget.remove();
//}
//todosElementos.forEach((elementos) => {
//  elementos.addEventListener("click", handleElemento);
//});

// Se o usuário clicar na tecla (t), aumente todo o texto do
///site;

function handleKeyClikT(event) {
  console.log(event.key);
  if (event.key === "t") {
    console.log("clicou T");
    document.documentElement.classList.toggle("textMaior");
  }
}

window.addEventListener("keydown", handleKeyClikT);
