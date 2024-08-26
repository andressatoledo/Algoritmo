/*
Fazer  um  programa  que  pede  para  o  usuário entrar com  dois  números  inteiros,  um  de  cada  vez,  e  na sequência o programa imprime na tela o maior valor.
*/


var entrada1 = prompt('Digite um número inteiro: ');
var entrada2 = prompt('Digite um número inteiro: ');

if(parseInt(entrada1) && parseInt(entrada2)){
    if(entrada1 > entrada2){
        console.log(`${entrada1} é maior que ${entrada2}`);
    }
    else{
        console.log(`${entrada1} é menor que ${entrada2}`);
    }
}   
else{
    console.log('O número digitado não é um número inteiro.');
}