/* Alterar o programa do 
Exercício 4 para imprimir na tela 
somente os elementos que estão 
em posições pares.  */


let numeros = prompt("Entre com os números separados por vírgula: ");

let lista = numeros.split(',')
for (i = 0; i < lista.length; i = i + 2){
    console.log(lista[i]);
}
