/*  Fazer uma função de nome somatorio que recebe um 
array e retorna o somatório dos elementos desse array. Ao lado 
tem-se exemplos de chamadas dessa função. */

function somatorio(lista){
    let soma = 0;
    for (let i = 0; i < lista.length ;i++){
        soma += lista[i];
    }
    
    return soma;
}

numeros = [8,3,4,7,5];
soma = somatorio(numeros);
console.log('Soma: ', soma);

numeros = [5,4,3];
soma = somatorio(numeros);
console.log('Soma: ', soma);
