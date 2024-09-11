/* Completar o código a seguir para imprimir na tela
os elementos da diagonal principal da matriz */

matriz = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
   ];

let i = 0;
let j= 0;

while(i < 3){
    while(j < 3){
        if(i == j){
            console.log(matriz[i][j])
        }
        j += 1;
    }
     
    j = 0;
    i += 1;
}