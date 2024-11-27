/*  Alterar a função somar do Exercício 7 para retornar o maior valor em cada par de valores entre os 
arrays recebidos como parâmetro.   */


function somar(a, b) {
    let v = [] //cria um array vazio 
    for (let i = 0; i < a.length ; i++) {
        v[i] = a[i] + b[i];
    }
    return v;
}
let a = [5, 8, 3, 4, 9, 7];
let b = [3, 5, 9, 2, 3, 4];
let r = somar(a, b);
console.log("Soma:", r); 