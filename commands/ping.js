module.exports = {
  name: 'ping',
  description: 'Get bot ping.',
   run: (client, message, args) => {
    message.reply({ content:'Pong!',  allowedMentions: { repliedUser: false } })
   }};