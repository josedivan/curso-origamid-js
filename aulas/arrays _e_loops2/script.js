//var numero = 0;
//var maximo = 50;
//for (; numero < 50; numero++) {
//  console.log(numero);
//}

var anos_copas = ["1959", "1962", "1970", "1992", "2002"];

for (var i = 0; i < anos_copas.length; i++) {
  console.log(" O Brasil ganhou a copa de " + anos_copas[i]);
}

var frutas = ["Banana", "Maça", "Pera", "Uva", "Melancia"];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(" " + frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

var ultimaFruta = frutas;

console.log(ultimaFruta[4]);
