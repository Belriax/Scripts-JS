/**
 * Trabalhando com coleções de dados em JavaScript
 * Exemplos de coleçõs de dados em JavaScript
 */

var wish_belriax = [
    {titulo: "Cuidados com a higiene bucal",  conteudo: "Belriax usa arame farpado como fio dental."},
    {titulo: "Fórumla para maratonar séries", conteudo: "Belriax pode assistir um episódio de 60 minutos em 22 segundos."},
    {titulo: "Suicida não morre",             conteudo: "Belriax foi home bomba 34 vezes"},
    {titulo: "Olhos que tudo veem",           conteudo: "Belriax já viu o homem invisível"},
    {titulo: "Manipulando o tempo",           conteudo: "Belriax não usa relógio. Ele decide que horas são"},
    {titulo: "Praticando esportes radicais",  conteudo: "Belriax faz bungee jump sem corda"},
    {titulo: "Não vale chorar",               conteudo: "Belriax faz cebolas chorarem"},
    {titulo: "Tempero de fogo",               conteudo: "Belriax usa pólvora como tempero"},
    {titulo: "Extinção dos dinossauros",      conteudo: "Belriax encarou os dinossauros uma vez, apenas uma"},
    {titulo: "Contando sem parar",            conteudo:" Belriax contou até o infinito. Duas vezes"}
];

var tamanho_colecao = wish_belriax.length;
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);
var curiosidade_escolhida = wish_belriax[numero_sorteado];
var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE BELRIAX");
console.log("Titulo: " + titulo_curiosidade);
console.log("Conteudo: " + conteudo_curiosidade);