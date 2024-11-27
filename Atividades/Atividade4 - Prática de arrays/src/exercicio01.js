/*  A função quebrar recebe uma string e retorna um array onde cada elemento é um caractere da string 
recebida como parâmetro.  */


function quebrar(nome) {
    return nome.split('');
}

let r = quebrar("Pedro");
console.log("Separado:", r); 