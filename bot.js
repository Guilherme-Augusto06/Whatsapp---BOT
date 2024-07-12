const venom = require('venom-bot');

venom
  .create({
    session: 'meu_bot', // Nome da sessão
    multidevice: true, // Usar para o modo multi-dispositivo
    folderSession: './sessions/' // Caminho para salvar as sessões
  })
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'Olá') {
      client
        .sendText(message.from, 'Seja bem vindo!')
        .then((result) => {
          console.log('Result: ', result); // Retorno de sucesso
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); // Retorno de erro
        });
    } else if (message.body.toLowerCase() === 'tudo bem?') {
      client
        .sendText(message.from, 'Sou seu assistente virtual como posso te ajuda?')
        .then((result) => {
          console.log('Result: ', result); // Retorno de sucesso
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); // Retorno de erro
        });
    } else {
      client
        .sendText(message.from, "Desculpe, não entendi o que você disse. Digite novamente")
        .then((result) => {
          console.log('Result: ', result); // Retorno de sucesso
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); // Retorno de erro
        });
    }
  });
}
