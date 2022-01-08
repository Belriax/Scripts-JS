/**
 * Criando Arrays em JavaScript
 * Exemplos de Arraus em JavaScript
 */


/**
 * Array disciplinas
 */
var disciplinas = [
    "Português",
    "Matematica",
    "Inglês",
    "Geografia",
    "Estudos Sociais"
];

disciplinas[4] = "Física";

console.log(disciplinas);

/**
 * Arrays Funcionários
 */
var funcionarios = [
    "Gleicon Sousa",
    "Mabi Emanuelle",
    "Jaqueline Moraes",
    "Belriax"
];

var novos_funcionarios = [
    "Mabi",
    "Jaque"
];

funcionarios[1] = novos_funcionarios[0];
funcionarios[2] = novos_funcionarios[1];

console.log(funcionarios.length);