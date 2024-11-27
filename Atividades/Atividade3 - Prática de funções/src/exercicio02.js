/* Completar o corpo da função imprimir para produzir o mesmo resultado do Exercício 1. Observe que 
a estrutura de repetição for não deverá ter o 1º parâmetro. */

function imprimir(a, b) {


    if (a < b) {
        for (; a <= b; a++) {
            console.log(a);
        }
    } else {
        for (; b <= a; b++) {
            console.log(b);
        }
    }

}

imprimir(10, 5);
imprimir(5, 10);