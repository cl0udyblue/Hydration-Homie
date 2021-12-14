module.exports = {
    name: 'kill',
     run: (client, message, args) => {
        const owner = client.config.isBotOwner
        if (!owner){
          return;
        }
        message.channel.send('Shutting down...').then(m => {
            client.destroy();
          });
     }};