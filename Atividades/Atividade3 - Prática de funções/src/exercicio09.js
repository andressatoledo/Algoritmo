/* A função fatorial recebe um número e retorna a multiplicação dos números de 1 até o valor 
fornecido, por exemplo, 5 * 4 * 3 * 2 * 1. Complete o código da função fatorial.   */

function fatorial(nro) {
    let total = 1;
    for (let i = 1; i <= nro; i++) {
        total *= i;
    }
    return total;
}

let r = fatorial(5);
console.log("Fatorial:", r);
r = fatorial(2);
console.log("Fatorial:", r);
r = fatorial(1);
console.log("Fatorial:", r);
r = fatorial(0);
console.log("Fatorial:", r);