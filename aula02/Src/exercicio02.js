/*
Fazer um  programa  que  pede  para  o  usuário entrar  com  dois  números inteiros,  um  de  cada  vez, e na sequência o programa imprime o resto da divisão do primeiro número pelo segundo.
Dica:  use  a  função  prompt para  ler  o  teclado,  a  função parseInt para  converter  de  string  para inteiro,  e a  função console.log para imprimir o resultado.
*/

var entrada1 = prompt('Digite um número inteiro: ');
var entrada2 = prompt('Digite um número inteiro: ');

if(parseInt(entrada1) && parseInt(entrada2)){
    resto = entrada1 % entrada2;
    console.log(`O resto da divisão do número ${entrada1} por ${entrada2} é: ${resto}`);
}
else{
    console.log('O número digitado não é um número inteiro.');
}