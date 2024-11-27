/* Fazer uma função de nome matriz que recebe 
uma matriz e retorna o somatório dos elementos. Ao lado 
tem-se exemplos de chamadas dessa função. */

function matriz(matriz){
    let soma = 0;
    for (let i = 0; i < matriz.length ;i++){
        for (let k = 0; k < matriz[i].length ;k++){
            soma += matriz[i][k];
        }

    }
    return soma
}

numeros = [[9,2,4],
[6,5,7],
[2,1,3]];
soma = matriz(numeros);
console.log('Soma: ', soma);


numeros = [[5,8,3,4],
[9,7,2]];
soma = matriz(numeros);
console.log('Soma: ', soma);
