/* Fazer um programa que pede para o usuário entrar com o 
nome dele. Na sequência o programa imprime cada letra do nome 
numa linha. Use a estrutura de repetição for.  */


let nome = prompt("Entre com o seu nome: ");

for (i = 0; i < nome.length; i++){
    console.log(nome[i]);
}
