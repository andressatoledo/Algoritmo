/* A função imprimir recebe dois números inteiros e imprime na tela os números nesse intervalo. 
Complete o código para a função imprimir na tela os números no intervalo, assim como é mostrado no exemplo.  */

function imprimir(a,b){ 
    if(a < b){
        for(let i = a; i <= b; i++){ 
            console.log(i); 
        } 
    }else{
        for(let i = b; i <= a; i++){ 
            console.log(i); 
        } 
    }
    
} 

imprimir(10,5);