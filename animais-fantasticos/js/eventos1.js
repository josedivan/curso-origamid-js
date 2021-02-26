const img = document.querySelector("img");

function callback(event) {
  //console.log(event);
}
//img.addEventListener("click", callback);

const animaisListas = document.querySelector(".animais-lista");
// currentTarget seleciona todas as imagens da lista.
// target seleciona só a imagem que clicar da lista em cima.
function callbackLista(event) {
  // console.log(event.type);
}

animaisListas.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  //console.log(this.getAttribute("href"));
  event.preventDefault();
  //console.log(this);
}
linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent() {
  // console.log(event.type, event);
}

//h1.addEventListener("click", handleEvent);

//h1.addEventListener("mouseenter", handleEvent);

function handleKeyboard(event) {
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  } else if (event.key === "s") {
    document.body.classList.remove("azul");
  }
}

window.addEventListener("keydown", handleKeyboard);
