module.exports = {
    name: 'kill',
     run: (client, message, args) => {
      if (message.author.id !== client.config.ownerID) return;
        message.channel.send('Shutting down...').then(m => {
            client.destroy();
          });
     }};