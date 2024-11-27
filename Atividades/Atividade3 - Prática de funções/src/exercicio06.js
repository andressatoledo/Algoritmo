/* Completar o código da função concatenar para retornar uma única string com os nomes unidos por 
espaços. */

function concatenar(a, b, c) {
    let concatenado = "";
    concatenado = concatenado.concat(a,' ',b, ' ',c);
    return concatenado;
}
let r = concatenar("Ana", "Maria", "Silva");
console.log("Nome:", r);
r = concatenar("Pedro", "Antonio", "Marques");
console.log("Nome:", r);

