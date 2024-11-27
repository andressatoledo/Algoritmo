/*  Fazer um programa que 
pede para o usuário entrar com alguns 
números separados por vírgula. Na 
sequência, imprimir na tela os números 
fornecidos 
pelo usuário.  */


let numeros = prompt("Entre com os números separados por vírgula: ");

let lista = numeros.split(',')
for (i = 0; i < lista.length; i++){
    console.log(lista[i]);
}
