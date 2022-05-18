const pratos = {
    1: { nome: 'Pipoca', tempo: 10 },
    2: { nome: 'Macarrão', tempo: 8 },
    3: { nome: 'Carne', tempo: 15 },
    4: { nome: 'Feijão', tempo: 12 },
    5: { nome: 'Brigadeiro', tempo: 8 },
  };
  
  function aquecer(numeroPrato, tempo) {
    const prato = pratos[numeroPrato];
  
    let mensagem;
    const tempoPadrao = prato.tempo;

    if (!prato) {
      return console.log('Prato inexistente');
    }
    
    if (tempo < tempoPadrao) {
      mensagem = 'Tempo insuficiente';
    } else if (tempo >= tempoPadrao * 2) {
      mensagem = 'A comida queimou';
    } else if (tempo >= tempoPadrao * 3) {
      mensagem = 'Kabummm';
    }
    

    console.log(mensagem);
    console.log("Prato pronto, bom apetite!!!")

  }
