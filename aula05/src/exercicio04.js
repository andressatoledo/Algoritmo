/* Completar o código a seguir para imprimir na tela o
somatório dos elementos do array. */

numeros = [8,3,4,7,5];
let i = 0;
let soma = 0;

while (i < numeros.length){
    soma += numeros[i];
    i = i + 1;
}

console.log(soma);