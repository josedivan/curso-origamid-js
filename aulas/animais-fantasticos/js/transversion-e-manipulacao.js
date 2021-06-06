//const h1 = document.querySelector("h1");
//
//console.log(h1.innerHTML);
//console.log(h1.outerHTML);
//
//const lista = document.querySelector(".animais-lista");
//console.log(lista.children[--lista.children.length]);
//
//const animais = document.querySelector(".animais");
//
//const contato = document.querySelector(".contato");
//const titulo = document.querySelector(".titulo");
//
//const mapa = document.querySelector(".mapa");
//
////contato.removeChild(titulo);
//
//contato.insertBefore(animais, mapa);
//
//const novoh1 = document.createElement("h1");
//novoh1.innerText = "Novo titulo ";
//novoh1.classList.add("titulo");
//mapa.appendChild(novoh1);
//console.log(novoh1);

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add("azul");
faq.appendChild(cloneH1);
