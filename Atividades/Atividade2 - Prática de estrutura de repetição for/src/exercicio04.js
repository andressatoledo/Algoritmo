/* Alterar o código do Exercício 3 para imprimir o código ASCII de cada caractere. 
O método charCodeAt retorna código do caractere na tabela ASCII 
(https://www.w3schools.com/jsref/jsref_charcodeat.asp 
e 
https://documentacao.senior.com.br/tecnologia/6.2.35/view/tabelaascii.htm). */


let placa = prompt("Entre com a placa:"); //abc5197
for(let i = 0; i < placa.length; i++ ){ 
    console.log(placa.charCodeAt(i)); 
}