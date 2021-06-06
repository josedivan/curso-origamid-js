const href = window.location.href;

console.log(href);

const h1Selecionado = document.querySelector("h1");
const bodySelecionado = document.querySelector("body");
const h1Classes = document.querySelector("h1").classList;

console.log(h1Selecionado);
console.log(bodySelecionado);
console.log(h1Classes);

h1Selecionado.addEventListener("click", function () {
  console.log("Clicou em ", h1Selecionado.innerText);
});
