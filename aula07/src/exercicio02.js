/*  Alterar o programa do Exercício 1 para imprimir na 
tela somente as letras que estão em posições pares.   */


let nome = prompt("Entre com o seu nome: ");

for (i = 0; i < nome.length; i = i + 2){
    console.log(nome[i]);
}
