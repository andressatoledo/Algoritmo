/* Fazer um programa que pede para o usuário entrar
com um nome e, na sequência, o programa imprime na tela os
caracteres que estão em posições pares. */

let nome = prompt('Digite um nome: ');
let i = 0;
while (i < nome.length){
    if(nome[i]%2 == 0){
        console.log(`Posição ${i}: ${nome[i]}`);
    }
    
    i += 1;
}

