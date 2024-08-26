
/*
Fazer um programa que pede para o usuário fornecer o nome da fruta (todas as letras minúsculas) e, na  sequência, o  programa  informa  o  valor  do  suco  de acordo com a tabela a seguir.
O programa deverá exibir “Não temos esse suco”, caso o usuário forneça um nome de fruta inexistente na tabela.
*/

var fruta = prompt('Digite a fruta que deseja:')
console.log(fruta)


switch(fruta){
    case 'laranja':
        console.log('O preço do suco de laranja é: R$3,50.');
        break
        
    case 'limão':
        console.log('O preço do suco de limão é: R$3,00.');
        break

    case 'acerola':
        console.log('O preço do suco de acerola é: R$3,50.');
        break

    case 'manga':
            console.log('O preço do suco de manga é: R$4,00.');
            break

    case 'melancia':
        console.log('O preço do suco de melancia é: R$4,00.');
        break

    case 'morango':
        console.log('O preço do suco de morango é: R$5,00.');
        break

    case 'maracuja':
        console.log('O preço do suco de maracuja é: R$4,50.');
        break

    case 'açai':
        console.log('O preço do suco de açai é: R$6,00.');
        break

    default:
        console.log('Não temos essa fruta.')
        break
}





