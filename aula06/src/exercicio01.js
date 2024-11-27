/* Fazer uma função de nome maior que recebe 
dois números e retorna o maior deles. Ao lado tem-se 
dois exemplos de chamadas dessa função. */

function maior(a,b){
    if(a > b){
        return a
    }
    else{
        return b
    }
}

m = maior(2,3);
console.log('Maior: ',m)

m = maior(5,2);
console.log('Maior: ',m)