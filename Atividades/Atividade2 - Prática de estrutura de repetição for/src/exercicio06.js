/*  Completar o código a seguir para imprimir na tela o somatório dos números do array. 
Dica: será necessário converter cada elemento do array de string para inteiro.  */


let nros = ["19","11","5","10","20"]; 
let soma = 0; 
for(let i = 0; i < nros.length; i++ ){ 
    soma += parseInt(nros[i]); 
} 
console.log("Somatório:", soma); 