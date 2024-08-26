/*
Fazer  um  programa  que  pede  para  o  usuário entrar um número inteiro e na sequência o programa imprime na tela se o número é par ou ímpar.
Dica: um número é par se o resto da divisão dele por 2 é zero.
*/
var entrada = prompt('Digite um número inteiro: ');

if(parseInt(entrada)){
    if(entrada % 2 == 0){
        console.log(`${entrada} é par`);
    }
    else{
        console.log(`${entrada} é ímpar`);
    }
   
}
else{
    console.log('O número digitado não é um número inteiro.');
}