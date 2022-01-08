/**
 * Trabalhando com números em JS
 * Exemplos com numeros, laços/estruturas de repetição e condições if else em JavaScript
 */


let numeros = [ 10, 5, 8, 12, 9, 6, 8, 24, 3, 11, 18, 17, 33];

let numeros_pares = 0;
let numeros_impares = 0;

let contador = 0;

while ( contador  < numeros.length ) {

    if(numeros[contador] % 2 == 0){
        numeros_pares++;
    }else{
        numeros_impares++;
    }
    
    contador++;
}

console.log("Total numeros pares é: " + numeros_pares);
console.log("Total de numeros impares é: " + numeros_impares);