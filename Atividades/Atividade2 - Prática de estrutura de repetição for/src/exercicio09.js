/*  Altere o código do Exercício 8 para imprimir na tela somente o último caractere de cada nome. 
Dica: será necessário saber a quantidade de caracteres de cada string. */


let nomes = ["Pedro","Lucy","Ana","Karla"]; 
for(let i = 0; i < nomes.length; i++ ){ 
    console.log(nomes[i][nomes[i].length - 1]); 
} 