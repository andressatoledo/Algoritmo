/* Completar o corpo da função imprimir para produzir o mesmo resultado do Exercício 1. Observe que 
a estrutura de repetição for não deverá ter o 1º parâmetro. */

function imprimir(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    for (; a <= b; a++) {
        console.log(a);
    }
}
imprimir(5, 10);
imprimir(19, 15);
