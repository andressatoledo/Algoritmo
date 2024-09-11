/*: Completar o código a seguir para imprimir na tela os
elementos do array que estão em posições ímpares. */

numeros =  [8,3,4,7,5,6,4];
let i = 0;

while (i < numeros.length){
    if(i%2 == 1){
       console.log(numeros[i]);
    }
    
    i = i + 1;
}