const animais = document.getElementById("animais");
//console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
//console.log(gridSection[1]);

const primeiroLi = document.querySelector("li");

//console.log(primeiroLi);
const primeiroUl = document.querySelector("ul");
//console.log(primeiroUl);

// Como acessar todos os links externos do site.
// Obs: QuerySelector retona apenas o primeiro, não retorna uma lista.
// Ex:
const linkExterno = document.querySelector('[href^="#"]');
//console.log(linkExterno.href);

// Pegando todas as classes no html com o querySelectorALL assim como o css seleciona.
// Ex:

const animasImg = document.querySelectorAll(".animais img ");
//console.log(animasImg);

const gridSectionHTML = document.getElementsByClassName("grid-section");

gridSectionNode = document.querySelectorAll(".grid-section");

primeiroUl.classList.add("grid-section");

//console.log(gridSectionHTML[0]);
//console.log(gridSectionNode[0]);

gridSectionNode.forEach(function (item, index) {
  //console.log(index);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  //console.log(item);
});

//Exercício

// Retorne no console todas as imagens do site
var imgs = document.querySelectorAll("img");

//console.log(imgs);
imgs.forEach(function (imagens) {
  //console.log(imagens);
});

// Retorne no console apenas as imagens que começaram com a palava imagem.
const imagemAnimais = document.querySelectorAll('img [src^="img/imagem"]');
//console.log(imagemAnimais);

// Selecione todos os links internos (onde o href começa com #)

const linksExterno = document.querySelectorAll('[href^="#"]');

linksExterno.forEach(function (links) {
  //console.log(links);
});

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroh2 = document.querySelectorAll("h2 ");
//console.log(primeiroh2[0]);

// Selecione o último p do site
const UltimoP = document.querySelectorAll("p ");
//console.log(UltimoP[UltimoP.length - 1]);
