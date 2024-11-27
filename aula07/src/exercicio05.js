/*  Alterar o programa do 
Exercício 4 para imprimir na tela o 
somatório dos valores fornecidos. */

let numeros = prompt("Entre com os números separados por vírgula: ");

let lista = numeros.split(',')
let soma = 0;
for (i = 0; i < lista.length; i++){
    
    soma += parseInt(lista[i]);
}

console.log(soma)
