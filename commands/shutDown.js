module.exports = {
  name: 'kill',
   run: (client, message, args) => {
    if(!message.guild.me.permissions.has(['SEND_MESSAGES'])) return;
    if (message.author.id !== client.config.ownerID) return;
      message.channel.send('Shutting down...').then(m => {
          client.destroy();
        });
   }};