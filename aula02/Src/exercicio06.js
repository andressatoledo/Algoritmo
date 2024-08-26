
/*
Fazer um programa que pede para o usuário entrar com a idade dele  e,  na  sequência, o  programa  indica  se  ele  é  de  menor  ou adulto.
*/


var idade = prompt('Digite um número inteiro: ');

if(parseInt(idade)){
    if(idade < 18){
        console.log('De menor.');
    }
    else{
        console.log('Adulto.');
    }
   
}
else{
    console.log('O número digitado não é um número inteiro.');
}