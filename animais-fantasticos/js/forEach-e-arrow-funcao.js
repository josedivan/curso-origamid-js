const imgs = document.querySelectorAll("img");
//console.log(imgs);

imgs.forEach((itens) => {
  //console.log(itens);
});

// Dois modo de funções js

let i = 0;
//imgs.forEach(() => console.log(i++));

//Exercício
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((item) => {
  //console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  //console.log(item.innerHTML);
});

//Como corrigir os erros abaixo:
const img = document.querySelectorAll("img");

img.forEach((item) => {
  //console.log(item);
});

//img.forEach(() => i++);
