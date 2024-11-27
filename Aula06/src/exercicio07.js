/*  Fazer uma função de nome inverter que recebe 
uma lista e imprime na tela os elementos da lista na ordem 
inversa. Ao lado tem-se exemplos de chamadas dessa 
função. */

function inverte(lista){
    let stringinvertida = '';
    for (let i = lista.length - 1; i >= 0 ;i--){
        console.log(lista[i]);
    }
}

numeros = [8,3,4,7,5];
stringinvertida = inverte(numeros);
console.log('Invertida: ', stringinvertida);

numeros = [5,4,3];
stringinvertida = inverte(numeros);
console.log('Invertida: ', stringinvertida);
