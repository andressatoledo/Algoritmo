/* A função operacao recebe três parâmetros e retorna o resultado da operação. O 1º e 2º parâmetro 
são números e o 3º parâmetro é um texto contendo a identificação da operação a ser executada. Programar o 
corpo da função operacao para retornar o resultado da operação. */

function operacao(a, b, tipo) {
    if (tipo == "+") {
        return a + b;
    }
    else {
        if (tipo == "-") {
            return a - b;
        }
        else {
            if (tipo == "*") {
                return a * b;
            }
            else {
                return a / b;
            }
        }
    }
}
let r = operacao(10, 4, "+");
console.log("Soma:", r);

r = operacao(10, 4, "-");
console.log("Subtração:", r);

r = operacao(10, 4, "*");
console.log("Multiplicação:", r);

r = operacao(10, 4, "/");
console.log("Divisão:", r); 