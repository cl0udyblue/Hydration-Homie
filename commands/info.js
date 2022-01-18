const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'info',
    aliases: ['user', 'member', 'roles', 'id', 'userid'],
    async run(client, message, args) {
    //Notes from Cloud for Cloud:

    const user = message.mentions.users.first() ?? await client.users.fetch(args[0]).catch(() => null) //user, this just removes !info without args
  
    if (!user){
        return message.reply({content:`Please specify a user to get info on!`, allowedMentions: { repliedUser: false } })
    } // these r obvious, if no args or no user specified, return a message.
    if(!args[0]){
        return message.reply({content:`Please specify a user to get info on!`, allowedMentions: { repliedUser: false } })
    };

    let stamp = Math.floor(user.createdTimestamp / 1000)
    stamp = `<t:${stamp}:R>`;
    //math shit. if you ever come back to this see if you actually need to divide by 1000 and then multiply by 1000 again... seems stupid
    let stamp2 = Math.floor(user.createdTimestamp / 1000)
    stamp2 = `<t:${stamp2}>`;

// MEMBER SECTION


    const member = message.mentions.members.first() ?? await message.guild.members.fetch(args[0]).catch(() => null)
    
    if (member) {
        

           let perms = member.permissions.toArray()
        const color = member.displayColor
        let roles = []
        member.roles.cache.forEach(i => roles.push(`<@&${i.id}>`))
        if(member.permissions.has(`ADMINISTRATOR`)){
            message.reply({ embeds:[new MessageEmbed()
                .setColor(`RANDOM`)
                .setTitle(`Info on ${user.tag}.`)
                .setDescription(`Mention: <@${user.id}>`)
                .setThumbnail(`${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })}`)
                .addFields([
                    { name: 'ID', value: `${member.id}`, inline: true },
                    { name: 'Date created', value: `${stamp2}
                    ${stamp}`, inline: true },
                    { name: 'Roles', value: `${roles.join(" ")}`},
                    { name: 'Permissions', value: `\`ADMINISTRATOR\``}
                  ])], allowedMentions: { repliedUser: false } })

        } // send `ADMINISTRATOR` instead of *every* permission
        else if(!member.permissions.has('ADMINISTRATOR')) {
            message.reply({ embeds:[new MessageEmbed()
                .setColor(`RANDOM`)
                .setTitle(`Info on ${user.tag}.`)
                .setDescription(`Mention: <@${user.id}>`)
                .setThumbnail(`${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })}`)
                .addFields([
                    { name: 'ID', value: `${member.id}`, inline: true },
                    { name: 'Date created', value: `${stamp2}
                    ${stamp}`, inline: true },
                    { name: 'Roles', value: `${roles.join(" ")}`},
                    { name: 'Permissions', value: `\`${perms.join(', ')}\``}
                  ])], allowedMentions: { repliedUser: false } })
        }
            
        } // end of admin check if/else
    
    
    
    else {
        message.reply({ embeds:[new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Info on ${user.tag}.`)
            .setDescription(`Mention: <@${user.id}>`)
            .setThumbnail(`${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })}`)
            .addFields([
                { name: 'ID', value: `${user.id}`, inline: true },
                { name: 'Date created', value: `${stamp2}
                ${stamp}`, inline: true }
              ])], allowedMentions: { repliedUser: false } })
    }
}
}