module.exports = {
  name: 'ping',
  description: 'Get bot ping.',
   run: (client, message, args) => {
    message.channel.send('Pong!')
   }};