/**
 * Laço/Estrutura de repetição "do while" * 
 * 
 * Na linguagem JavaScript temos a estrutura de repetição do .. while que é uma 
 * variante de while. Com essa estrutura também podemos iterar um bloco de código 
 * diversas vezes, sendo que a sintaxe de do .. while é um pouco diferente da sintaxe do while.
 */

let meses = [
    "Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio", 
    "Junho", 
    "Julho", 
    "Agosto", 
    "Setembro", 
    "Outubro", 
    "Novembro", 
    "Dezembro"];

let contador = 0;

do {

    console.log(meses[contador]);
    contador++;
    
} while (contador < meses.length);