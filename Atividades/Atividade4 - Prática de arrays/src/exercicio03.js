/* Alterar o corpo da função quebrar do Exercício 2 para substituir qualquer vogal por traço. 
Dica: use o operador ou || para comparar cada vogal.  */


function quebrar(nome) {
    const v = nome;
    var listanome = v.split('');
    for (let i = 0; i < listanome.length; i++) {
        if (listanome[i].toUpperCase() == "A" || listanome[i].toUpperCase() == "E" || listanome[i].toUpperCase() == "I" || listanome[i].toUpperCase() =="O" || listanome[i].toUpperCase() == "U") {
            listanome[i] = "-";
        }
    }
    return listanome;
}
let r = quebrar("Mariana");
console.log("Separado:",r); 