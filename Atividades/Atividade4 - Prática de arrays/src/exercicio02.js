/* Alterar o corpo da função quebrar para substituir as letras a por traço.   */


function quebrar(nome) {
    const v = nome;
    var listanome = v.split('');
    for (let i = 0; i < listanome.length; i++) {
        if (listanome[i] == "a") {
            listanome[i] = "-";
        }
    }
    return listanome;
}
let r = quebrar("Mariana");
console.log("Separado:", r); 