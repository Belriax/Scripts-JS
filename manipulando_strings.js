/**
 * Manipulação de Strings
 * Exemplos com manipulações de Strings em JavaScript
*/

let frase = 'Estou aprendendo JavaScript na DevMedia';

let posicao_inicio = 16;
let posicao_fim = 27;

let palavra = frase.substring(posicao_inicio, posicao_fim);

console.log(palavra);

let nome = 'Gleicon';
let tecnologia = 'JavaScript';

let frase = `O programador ${nome} domina ${tecnologia}.`;

console.log(frase);


let paises_array = "Brasil Argentina Urugualize Paraguai Chile";

let paises = paises_array.split(" ");

console.log(paises);