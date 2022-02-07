module.exports = {
  name: 'ping',
  description: 'Get bot ping.',
   run: (client, message, args) => {
    if(!message.guild.me.permissions.has(['SEND_MESSAGES'])) return;
    message.reply({ content:'Pong!',  allowedMentions: { repliedUser: false } })
   }};