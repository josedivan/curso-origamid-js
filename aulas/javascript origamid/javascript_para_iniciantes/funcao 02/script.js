console.log("Ola");

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "por favor preencha o número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade());

// Crie uma função com pais visitados e os que falta visitar.

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
  return `falta visitar ${totalPaises - paisesVisitados} paises `;
}

console.log(faltaVisitar(1));
