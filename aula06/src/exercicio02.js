/* Fazer uma função de nome primeira 
Exemplo de saída: 
Exemplo de saída: 
que recebe uma string e retorna o 1º caractere 
dessa string. Ao lado tem-se dois exemplos de 
chamadas dessa função.*/

function primeira(string){

    const primeirocaractere = string[0];
    return primeirocaractere;
}


primeirocaractere = primeira("Pedro");
console.log(primeirocaractere);

primeirocaractere = primeira("Mariana");
console.log(primeirocaractere);