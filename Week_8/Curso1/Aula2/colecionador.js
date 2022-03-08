const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",

    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
      }
   }

//    console.log(colecionador.nome); //notação de ponto

//    console.log(colecionador["nome"]); //notação []

   console.log(colecionador);

   for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
  }

  
  console.log(colecionador);