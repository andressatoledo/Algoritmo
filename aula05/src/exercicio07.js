/*: Completar o código a seguir para imprimir na tela a
multiplicação dos elementos dos arrays pesos e notas. */

pesos = [0.4,0.2,0.1,0.3]
notas = [8.2,5.0,10.0,9.1]
let i = 0;

while (i < pesos.length){
    
    console.log(`Peso: ${pesos[i]} * Nota: ${notas[i]} = ${pesos[i] * notas[i]}`);
    i = i + 1;
}