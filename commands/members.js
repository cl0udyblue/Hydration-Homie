module.exports = {
  name: 'ping',
  description: 'Get bot ping.',
  async run(client, message, args){
      const adminPerm = client.config.adminPerm
      if(!adminPerm) return;
    let members = await msg.guild.members.fetch();
    message.reply({ embeds:[
      new Discord.MessageEmbed()
      .setTitle()
    ],  allowedMentions: { repliedUser: false }  })
   }};