module.exports = {
    name: "addrole",
    aliases: ['role', 'ar'],
    run : (client, message, a) => {
       
      const adminPerm = client.config.adminPerm
      if (!adminPerm)
        return message.reply("You can't use this command.")
    
        if (message.mentions.members.size === 0)
        return message.reply("Please mention a user to add the role to");
    
      if (!message.guild.me.permissions.has("MANAGE_GUILD"))
        return message.reply("I don't have the `MANAGE_GUILD` permission");
    
        let person = message.mentions.members.first()
        let roleAdd = message.mentions.roles.first()
        let myRole = message.guild.roles.cache.find(role => role.id === roleAdd.id);
    
        if(person.roles.cache.find(role => role.id === roleAdd.id)){
        message.channel.send(`This person already has the **${roleAdd.name}** role`)
        return;

    };
        
        person.roles.add(myRole)
        message.channel.send(`Added the ${myRole.name} role to <@${person.id}>`)
    
      },
    };