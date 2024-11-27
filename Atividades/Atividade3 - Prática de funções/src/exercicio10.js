/* Não existe fatorial de número negativo. Alterar o código da função fatorial do Exercício 9 para 
retornar NaN para chamadas da função passando valor negativo.  */

function fatorial(nro) {
    var total = 'NaN';
    if (nro > 0) {
        var total = 1;
        for (let i = 1; i <= nro; i++) {
            total *= i;
        }
    }
    return total;
}

let r = fatorial(5);
console.log("Fatorial:", r);
r = fatorial(-2);
console.log("Fatorial:", r); 