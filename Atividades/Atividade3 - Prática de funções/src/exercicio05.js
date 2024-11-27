/* : A função operacao a seguir deverá retornar NaN quando a operação não for conhecida. 
NaN: Not a Number (Não é um Número) é usado para indicar que o resultado de uma operação não é válido.  */

function operacao(a, b, tipo) {
    let r = NaN; 
    if (tipo == "+") {
        r = a + b;
    }
    else {
        if (tipo == "-") {
            r = a - b;
        }
        else {
            if (tipo == "*") {
                r = a * b;
            }
            else {
                if(tipo == "/" ){ 
                    r = a / b; 
                }   
            }
        }
    }
    return r
}

let r = operacao(10,4,"+"); 
console.log("Soma:", r); 
r = operacao(10,4,"-"); 
console.log("Subtração:", r); 
r = operacao(10,4,"*"); 
console.log("Multiplicação:", r); 
r = operacao(10,4,"/"); 
console.log("Divisão:", r); 
r = operacao(10,4,"**"); 
console.log("Potência:", r);