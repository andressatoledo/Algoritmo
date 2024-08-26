/*
Fazer  um  programa  que  pede  para  o  usuário entrar com  dois  números  inteiros,  um  de  cada  vez,  e  na sequência  o  programa  imprime na  tela  se  o  1º número  é múltiplo do 2º número.
Dica: um número é múltiplo do outro se o resto da divisão deles é zero. 
*/


var entrada1 = prompt('Digite um número inteiro: ');
var entrada2 = prompt('Digite um número inteiro: ');

if(parseInt(entrada1) && parseInt(entrada2)){
    if(entrada1 % entrada2 == 0){
        console.log(`${entrada1} é múltiplo de ${entrada2}`);
    }
    else{
        console.log(`${entrada1} não é múltiplo de ${entrada2}`);
    }
}   
else{
    console.log('O número digitado não é um número inteiro.');
}