/* Alterar o corpo da função quebrar do Exercício 2 para retornar um array com a letras envolvidas pelas 
marcações HTML <div> </div>.   */


function quebrar(nome) {
    const v = nome;
    var listanome = v.split('');
    for (let i = 0; i < listanome.length; i++) {
       
        var letra = "";
        listanome[i] = letra.concat('<div>',listanome[i],'</div>');
       
    }
    return listanome;
}
let r = quebrar("Mariana");
console.log("Separado:", r);