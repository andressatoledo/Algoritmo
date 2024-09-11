/* Completar o código a seguir para imprimir na tela os
elementos de maior valor em cada posição nos arrays de
entradas e saídas. */

entradas = [9,2,4,5,8];
saidas = [3,5,2,7,4];
let i = 0;

while (i < saidas.length){
    if(entradas[i] > saidas[i]){
        maior = entradas[i];
    } 
    else{
        maior = saidas[i];
    }
    
    console.log(`Posição ${i}: ${maior}`);
    i += 1;
}