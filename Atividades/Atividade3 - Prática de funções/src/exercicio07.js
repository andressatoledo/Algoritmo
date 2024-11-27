/* A função longo recebe duas strings e retorna aquela que possui o maior número de caracteres. 
Complete o código da função longo. 
Dica: use a propriedade length da string para obter o número de caracteres da string 
(https://www.w3schools.com/jsref/jsref_length_string.asp). */

function longo(a,b){ 
    if( a.length > b.length){ 
        return a; 
    } 
    else{ 
        return b; 
    } 
} 

let r = longo("Ana","Maria"); 
console.log("Nome mais longo:", r); 
r = longo("Antonio","Pedro"); 
console.log("Nome mais longo:", r);