//pegando a classe menu com vetor 0
const menu = document.querySelector(".menu");
// adicionando uma classe ativo
//menu.classList.add("ativo", "teste");
// removendo a classe ativo
//menu.classList.toggle("ativo");
//menu.classList.remove("ativo");
//console.log(menu);
const animamis = document.querySelector(".menu");
//menu.classList.add("azul");
//acessando classes ex: menu.classList[1], pega a primeira class existente.
menu.classList[1];
// Adicionando uma classe: menu.classList.add ("ativo")
//menu.classList.add("ativo");
// removendo classes
menu.classList.remove("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("Possui azul");
}

//console.log(menu);

// 1. ATRIBUTOS.

const animais = document.querySelector(".animais");
//console.log(animais.attributes[1]);

// 2. [getAttribute e SetAttribute]
// métodos são uma função, por isso tem parenteses.

const img = document.querySelector("img");

// getAttribute ele pega atributo existente e acesssa
// Ex:
const imgSrc = img.getAttribute("src");
//console.log(imgSrc);
// O SetAttribute ele define se não existir, cria ou atualiza o já existe.
// EX:
img.setAttribute("alt", "É uma raposa");

//HasAtribute, verifica se o valor é verdade ou falso na classe.
//ex:
const possuiAlt = img.hasAttribute("alt");
//console.log(possuiAlt);

//console.log(img);

const carro = {
  portas: 4,
  andar: function (km) {
    //console.log(`andou ${km}`);
  },
};
carro.portas = 20;

//console.log(carro.portas);

//Exercício
// Adicione a classe ativo a todos os itens do menu

// adicionei uma classe ativo em todos os "LI da UL"

const classAtivo = document.querySelectorAll(".menu li");

classAtivo.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha ape
// Removendo as classes ativos do li

classAtivo.forEach((item) => {
  item.classList.remove("ativo");
});

// Verifique se as imagens possuem o atributo alt e onde estão os alt nas imagens.
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "http://www.google.com");
console.log(link);
