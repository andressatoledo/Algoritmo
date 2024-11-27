/*  Completar o código a seguir para imprimir na tela o somatório dos números que estão na string. 
Observação: no Exercício 6 os números estavam em um array, aqui os números estão em uma string. 
Dica: use o método split para quebrar a string em um array de strings. */


let nros = "19,11,5,10,20"; 
listanros = nros.split(','); 
let soma = 0; 
for(let i = 0; i < listanros.length; i++ ){ 
    soma += parseInt(listanros[i]); 
} 
console.log("Somatório:", soma); 