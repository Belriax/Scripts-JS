/**
 * Função nativa Map()
 * Exemplos com a função nativa JavaSript Map();
 */
let carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }    
]

function retornoCarro(carro){
    return carro.marca + ' ' + carro.modelo + 'ano: ' + carro.anoFabricacao;
}

const novosCarros = carros.map(retornoCarro);

console.log(novosCarros);


const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

function abreviaMeses(mes){
    return mes.substring(0, 3);
}

const mesesAbreviados = meses.map(abreviaMeses);

console.log(mesesAbreviados);