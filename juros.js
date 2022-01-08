/**
 * Trabalhando com laços/estruturas de repetição em JavaScript
 * Exemplo com laço de repetição While
 */

let capital_emprestado = 3000;
let taxa_juros = 0.02;

let contador = 1;
let parcela_total = 10;

while (contador <= parcela_total) {

    let numero_parcela = contador;

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log(" A taxa de juros no período de " + numero_parcela + "º  Mes(es) é de R$ " + juros_emprestimo + ",00");

    contador++;
}