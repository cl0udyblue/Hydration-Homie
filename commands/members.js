module.exports = {
  name: 'ping',
  description: 'Get bot ping.',
  async run(client, message, args){
    if(!message.guild.me.permissions.has(['SEND_MESSAGES'])) return;
    if(!message.guild.me.permissions.has(['MANAGE_MEMBERS', 'MANAGE_ROLES'])) return message.reply({ content:(`I don't have the \`MANAGE_MEMBERS\` and \`MANAGE_ROLES permissions...`)})
      const adminPerm = client.config.adminPerm
      if(!adminPerm) return;
    let members = await msg.guild.members.fetch();
    message.reply({ embeds:[
      new Discord.MessageEmbed()
      .setTitle()
    ],  allowedMentions: { repliedUser: false }  })
   }};