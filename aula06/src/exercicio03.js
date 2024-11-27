/*  Fazer uma função de nome ultima que recebe 
uma string e retorna o último caractere dessa string. Ao lado 
tem-se exemplos de chamadas dessa função. 
Dica: use a propriedade length da string para obter o número 
de caracteres da string.  */



function ultima(string){
    let ultimocaractere = string[string.length - 1];
    return ultimocaractere;
}

ultimocaractere = ultima("Pedro");
console.log('Último caractere: ', ultimocaractere);


ultimocaractere = ultima("Mariana");
console.log('Último caractere: ', ultimocaractere);