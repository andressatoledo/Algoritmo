/*  Fazer uma função de nome letra que recebe uma 
string e um número inteiro indicando uma posição na string. A 
função retornará o caractere que está na posição fornecida como 
parâmetro. Ao lado tem-se exemplos de chamadas dessa função.   */



function letra(string,posicao){
    let stringposicao = string[posicao];
    return stringposicao;
}


stringposicao = letra("Pedro",1);
console.log('Caractere da posição: ', stringposicao);


stringposicao = letra("Mariana",3);
console.log('Caractere da posição: ', stringposicao);
