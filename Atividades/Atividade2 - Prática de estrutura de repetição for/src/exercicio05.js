/* Alterar o código do Exercício 4 para imprimir somente os dígitos numéricos. 
Na tabela ASCII os dígitos numéricos possuem valores de 48 a 57. 
Dica: será necessário comparar se o valor ASCII do caractere está no intervalo [48,57].  */


let placa = prompt("Entre com a placa:"); //abc5197
for(let i = 0; i < placa.length; i++ ){ 
    if(parseInt(placa[i])){
        console.log(placa.charCodeAt(i)); 
    }
}