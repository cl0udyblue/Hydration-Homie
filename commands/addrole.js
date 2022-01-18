module.exports = {
  name: "addrole",
  aliases: ['role', 'ar'],
  run : (client, message, a) => {
     
    const adminPerm = client.config.adminPerm
    if (!adminPerm)
      return message.reply({content:"You can't use this command.",  allowedMentions: { repliedUser: false }})
  
      if (message.mentions.members.size === 0)
      return message.reply({content:"Please mention a user to add the role to",  allowedMentions: { repliedUser: false }});
  
    if (!message.guild.me.permissions.has("MANAGE_GUILD"))
      return message.reply({content:"I don't have the `MANAGE_GUILD` permission",  allowedMentions: { repliedUser: false }});
  
      let person = message.mentions.members.first()
      let roleAdd = message.mentions.roles.first()
      let myRole = message.guild.roles.cache.find(role => role.id === roleAdd.id);
  
      if(person.roles.cache.find(role => role.id === roleAdd.id)){
      message.reply({content:`This person already has the **${roleAdd.name}** role`,  allowedMentions: { repliedUser: false }})
      return;

  };
      
      person.roles.add(myRole)
      message.reply({content:`Added the ${myRole.name} role to <@${person.id}>`,  allowedMentions: { repliedUser: false }})
  
    },
  };