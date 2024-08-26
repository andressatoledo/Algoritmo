/*
Fazer um programa que pede para o usuário  fornecer  a  temperatura  corporal  e, na sequência, o programa imprime a classificação da temperatura de acordo com a tabela a seguir.
*/


/*
Fazer um programa que pede para o usuário entrar com três números, um de cada vez, e na sequência o programa imprime o maior valor fornecido pelo usuário.
*/

var entrada = prompt('Digite um número real: ');


if(parseFloat(entrada)){
    if(entrada <= 35){
        console.log('Hipotermia');
    }
    else{ //Quer dizer que a 2 ou 3 é maior
        if(entrada >= 35.1 && entrada <= 37.7){
            console.log('Normal');
        }
        else{
            if(entrada >= 37.8 && entrada <= 39.5){
                console.log('Febre');
            }
            else{
                if(entrada >= 39.6 && entrada <= 41){
                    console.log('Febre alta');
                }
                else{  
                        console.log('Hipertemia');
                }
            }
           
        }
    }
}   
else{
    console.log('O número digitado não é um número real.');
}