/*   Fazer uma função de nome inverte que recebe uma 
string e retorna ela invertida. Ao lado tem-se exemplos de 
chamadas dessa função. */

function inverte(string){
    let stringinvertida = '';
    for (let i = string.length - 1; i >= 0 ;i--){
        stringinvertida = stringinvertida + string[i];
    }
    
    return stringinvertida;
}

stringinvertida = inverte("Pedro");
console.log('Invertida: ', stringinvertida);


stringinvertida = inverte("Mariana");
console.log('Invertida: ', stringinvertida);
