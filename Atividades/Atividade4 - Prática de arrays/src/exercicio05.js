/*  A função criar recebe dois inteiros e retorna um array contendo os números no intervalo formado 
pelos parâmetros. */


function criar(a, b) {
    let v = []; //cria um array vazio 
    for (let i = 0; a <= b; i++, a++) {
        v[i] = a;
    }
    return v;
}
let r = criar(5, 10);
console.log("Array:", r);
