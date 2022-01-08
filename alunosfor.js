/**
  A estrutura de repetição for .. of 
  permite iterar coleções, onde podemos manipular os 
  valores iterados no loop.
 */

/**
 * Percorre o valor da variável email_alunos
 */
let email_alunos = [
    'gleicon.santos@hotmail.com',
    'jaquelinedigital@gmail',
    'mabi.emanuelle@gmail',
    'belriax@proton.onyon'
]

for ( let list_email of email_alunos) {
    console.log("E-mail: " + list_email);
}

/**
 * Percorre o valor da variável clientes_array
 */
let clientes_array = [
    {id: 1, nome: 'Gleicon Sousa', telefone: '(00) 99874-2547'},
    {id: 2, nome: 'Jaqueline Moraes', telefone: '(00) 99874-2547'},
    {id: 3, nome: 'Mabi Emanuelle', telefone: '(00) 99874-2547'}
]

for ( let cliente of clientes_array) {

    let nome = cliente.nome;
    let telefone = cliente.telefone;

    console.log('Nome: ' + nome + ' - Telefone' + telefone);
    
}

/**
 * Percorre o valor da variáel produtos_array
 */

let produtos_array = [
    {id: 1, nome:'Mouse', preco: 50},
    {id: 2, nome:'Teclado', preco: 85},
    {id: 1, nome:'Fone de ouvido', preco: 78},
    {id: 1, nome:'Web Cam', preco: 187},
]

let desconto = 10;

for ( let produto of produtos_array){

    let nome = produto.nome;
    let preco = produto.preco;

    let valor_desconto = ( preco * desconto) / 100;
    let novo_preco = preco - valor_desconto;

    console.log('Novo preço do produto ' + nome + ": R$" + novo_preco + ",00");
}

/**
 * Percorre o valor da variável cursos_idiomas
 */

let cursos_idiomas = [
    {nome: 'Inglês', preco: 2500, carga_horaria: 160},
    {nome: 'Espanhol', preco: 1500, carga_horaria: 110},
    {nome: 'Francês', preco: 3600, carga_horaria: 200},
    {nome: 'Chinês', preco: 5500, carga_horaria: 400},
    {nome: 'Alemão', preco: 3800, carga_horaria: 230},
]

for ( let curso of cursos_idiomas) {

    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let cargar_horaria_curso = curso.carga_horaria;

    let preco_hora_curso = preco_curso / cargar_horaria_curso;

    console.log("Nome do curso: " + nome_curso);
    console.log("Carga horária: " + cargar_horaria_curso);
    console.log("Preço do curso: R$" + preco_curso + ",00");
    
    if (preco_hora_curso >= 15){
        console.log("Hora/aula superior ou igual a R$15,00");
    }else{
        console.log("Hora/aula inferior a R$15,00");
    }
    console.log('\n');
}

let alunos = ['Gleicon', 'Mabi', 'Jaqueline', 'Emanuelle', 'Moraes', 'Gleiciane', 'Gleyson'];

let total_alunos = alunos.length;

for (let contador = 0; contador < total_alunos; contador++) {
    
    console.log("Nome do aluno: " + alunos[contador]);
    
}