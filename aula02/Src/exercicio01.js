/*
Fazer  um  programa  que  pede  para  o  usuário entrar com um número inteiro e na sequência o programa imprime o resto da divisão desse número por 2.
Dica:  use  a  função  prompt para ler  o  teclado,  a  função parseInt para converter de string para inteiro, e a função console.log para imprimir o resultado
*/

var entrada = prompt('Digite um número inteiro: ');

if(parseInt(entrada)){
    resto = entrada % 2;
    console.log(`O resto da divisão do número ${entrada} é: ${resto}`);
}
else{
    console.log('O número digitado não é um número inteiro.');
}