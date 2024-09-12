/* Fazer um programa que pede para o usuário entrar com
um nome e, na sequência, o programa imprime na tela os caracteres
na ordem invertida. */

let nome = prompt('Digite um nome: ');
let i = 1;
while (i < nome.length){
    console.log(`Primeiro caractere: ${nome[nome.length - i]}`);
    i += 1;
}
