/*
Fazer um programa que pede para o usuário entrar com três números, um de cada vez, e na sequência o programa imprime o maior valor fornecido pelo usuário.
*/

var entrada1 = prompt('Digite um número inteiro: ');
var entrada2 = prompt('Digite um número inteiro: ');
var entrada3 = prompt('Digite um número inteiro: ');

if(parseInt(entrada1) && parseInt(entrada2) && parseInt(entrada3)){
    if(entrada1 >= entrada2 && entrada1 >= entrada3 ){
        console.log(`${entrada1} é maior que ${entrada2} e ${entrada3}`);
    }
    else{ //Quer dizer que a 2 ou 3 é maior
        if(entrada2 >= entrada1 && entrada2 >= entrada3 ){
            console.log(`${entrada2} é maior que ${entrada1} e ${entrada3}`);
        }
        else{
            console.log(`${entrada3} é maior que ${entrada1} e ${entrada2}`);
        }
    }
}   
else{
    console.log('O número digitado não é um número inteiro.');
}