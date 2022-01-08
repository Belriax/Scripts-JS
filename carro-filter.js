/**
 * Função nativa Filter()
 * Exemplos com a função nativa Filter() em JavaScript
*/
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];
  

  function retornaCarroFiat(carro){
      return (carro.marca == 'Fiat');
  }

  const carrosFiat = carros.filter(retornaCarroFiat);
  console.log(carrosFiat);

  const produtos = [
      {id: 1, nome: "Kush Indiano", ativo: false, valor: 120.00},
      {id: 2, nome: "Kunk Purple", ativo: true, valor: 80.00},
      {id: 4, nome: "Weed Hize", ativo: true, valor: 50.00},
      {id: 1, nome: "Weed Sativa", ativo: false, valor: 70.00},
      {id: 3, nome: "Colombia Gold", ativo: false, valor: 65.00},
      {id: 2, nome: "Californiano", ativo: true, valor: 130.00},
      {id: 3, nome: "Marroquino", ativo: false, valor: 24.00},
      {id: 4, nome: "Cabrobró", ativo: true, valor: 120.00}
  ]

  function retornaProdutos(produto){
      return produto.ativo == true;
  }

  const ProdutosAtivos = produtos.filter(retornaProdutos);

  console.log(ProdutosAtivos);