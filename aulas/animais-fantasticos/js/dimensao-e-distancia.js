const listaAnimais = document.querySelector(".copy");
const height = listaAnimais.scrollHeight;
const anaimaisTop = listaAnimais.offsetTop;
console.log(anaimaisTop);

const primeiroH2 = document.querySelector("h2");
const h2Left = primeiroH2.offsetLeft;
const react = primeiroH2.getBoundingClientRect();
console.log(react.top);

const small = window.matchMedia("(max-width: 600px)").matches;
if (small) {
  console.log("usuário mobile");
} else {
  console.log("usuário desktop");
}
