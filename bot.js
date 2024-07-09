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
    if (message.body.toLowerCase() === 'hello') {
      client
        .sendText(message.from, 'Hi there!')
        .then((result) => {
          console.log('Result: ', result); // Retorno de sucesso
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); // Retorno de erro
        });
    } else if (message.body.toLowerCase() === 'how are you') {
      client
        .sendText(message.from, 'I am a bot, I am always fine. How can I help you today?')
        .then((result) => {
          console.log('Result: ', result); // Retorno de sucesso
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); // Retorno de erro
        });
    } else {
      client
        .sendText(message.from, "Sorry, I didn't understand that.")
        .then((result) => {
          console.log('Result: ', result); // Retorno de sucesso
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); // Retorno de erro
        });
    }
  });
}
