/* Alterar o Exercício 7 para imprimir na tela o
somatório das multiplicações. */

pesos = [0.4,0.2,0.1,0.3]
notas = [8.2,5.0,10.0,9.1]
let i = 0;
let soma = 0;

while (i < pesos.length){
    multiplicacao = pesos[i] * notas[i];
    soma += multiplicacao;
    i = i + 1;
}

console.log(`Somatório: ${soma}`);