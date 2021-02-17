function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4);
console.log(areaQuadrado(4));

function imc(peso, altura) {
  const imc1 = peso / (altura * altura);
  return imc1;
}

console.log(imc(80, 1.88));

function corFavorita(cor) {
  if (cor === "azul") {
    return "É gosto do céu ";
  } else if (cor === "verde") {
    return "eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}
console.log(corFavorita("verde"));

//addEventListener("click", function () {
//console.log("oi");
//});
//
function terceiraIdade(idade) {
  if (idade >= 60) {
    console.log(typeof "É idoso");
    return true;
  } else {
    console.log("não é idoso");
    return false;
  }
}

console.log(terceiraIdade(59));
