/*   Completar o código a seguir para imprimir na tela o somatório 
dos elementos da variável nros. Use a estrutura de repetição for para 
percorrer os elementos da lista.   */


nros = [5,8,4,2,9,6,1,7,3] 
let soma = 0;
for (i = 0; i < nros.length; i++){
    soma += nros[i];
}


console.log(soma);