/*
Fazer um programa que pede para o usuário entrar 
com números. A entrada de números deve ser interrompida quando 
a soma atingir o valor 20.
*/

let soma = 0;

while(soma <= 20){
        
    let num = prompt('Entre com um número: ');
    num = parseInt(num);
    soma += num;
}

console.log(`Somatório: ${soma}`);