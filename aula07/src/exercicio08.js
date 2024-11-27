/* Alterar o programa do 
Exercício 7 para imprimir na tela o 
somatório dos elementos que 
estão em posições pares.  */


let numeros = prompt("Entre com os números separados por vírgula: "); 

let lista = numeros.split(','); 
let soma = 0;


for (let i = 0; i < lista.length; i = i + 2) {
    soma += parseInt(lista[i]); 
}

console.log(soma);
