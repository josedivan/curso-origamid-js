// duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu); // clonando o menu em copy

// selecione o primeiro DT da dl de faq

const faq = document.querySelector(".faq");
const primeioDt = faq.querySelector("dt");
const proximoDD = primeioDt.nextElementSibling;

console.log(proximoDD.remove);

// substitua o conteudo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;
