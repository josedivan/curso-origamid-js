const h1 = document.querySelector("h1");

console.log(h1.innerHTML);
console.log(h1.outerHTML);

const lista = document.querySelector(".animais-lista");
console.log(lista.children[--lista.children.length]);
