/**
 * Laços/Estruturas de repetição
 * While = Executa um bloco de código enquanto a condição for verdadeira.
 */

let alunos = ["Gleicon", "Mabi", "Jaqueline", "Emaunuelle"]

let contador = 0;

while ( contador < alunos.length) {
    
    let aluno_nome = alunos[contador];

    console.log("Aluno: " + aluno_nome);

    contador++;
}