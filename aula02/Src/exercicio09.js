/*
O IMC (Índice de Massa Corporal) é calculado usando peso/(altura*altura). Fazer um programa que pede para o usuário entrar com o peso (em Kg) e altura (em metros) e, na sequência, o 
programa imprime na tela a classificação do IMC de acordo com a classificação a seguir.
*/


/*
Fazer um programa que pede para o usuário  fornecer  a  temperatura  corporal  e, na sequência, o programa imprime a classificação da temperatura de acordo com a tabela a seguir.
*/


/*
Fazer um programa que pede para o usuário entrar com três números, um de cada vez, e na sequência o programa imprime o maior valor fornecido pelo usuário.
*/

var altura = prompt('Digite sua altura em metros: ');
var peso = prompt('Digite seu peso em kg: ');


if(parseFloat(altura) && parseFloat(peso)){
    var IMC = peso/(altura*altura);
    if(IMC < 18.5){
        console.log('Abaixo do peso');
    }
    else{ //Quer dizer que a 2 ou 3 é maior
        if(IMC >= 18.6 && IMC <= 24.9){
            console.log('Peso ideal (parabéns)');
        }
        else{
            if(IMC >= 25 && IMC <= 29.9){
                console.log('Levemente acima do peso');
            }
            else{
                if(IMC >= 30 && IMC <= 34.9){
                    console.log('Obesidade grau I');
                }
                else{  
                    if(IMC >= 35 && IMC <= 39.9){
                        console.log('Obesidade grau II (severa)');
                    }
                    else{
                        console.log('Obesidade grau III (mórbida)');
                    }
                }
            }
           
        }
    }
}   
else{
    console.log('O número digitado não é um número real.');
}