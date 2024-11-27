/* A função somatorio recebe um número e retorna o somatório dos números de zero até o valor 
fornecido. Complete o código da função somatorio.  */

function somatorio(nro) {
    let soma = 0;
    for (i = 0; i <= nro; i++) {
        soma += i;
    }
    return soma;
}

let r = somatorio(5);
console.log("Somatório:", r);