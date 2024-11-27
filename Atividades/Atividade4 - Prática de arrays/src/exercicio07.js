/*   A função somar recebe dois arrays de números inteiros e retorna um array com a soma de cada um 
dos elementos.   */


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