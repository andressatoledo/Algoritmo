/*  Alterar o programa do 
Exercício 4 para imprimir na tela 
somente os elementos que 
possuem valor par.  */


let numeros = prompt("Entre com os números separados por vírgula: ");

let lista = numeros.split(',')
for (i = 0; i < lista.length; i++){
    if(parseInt(lista[i])%2==0){
    console.log(lista[i]);
    }
}
