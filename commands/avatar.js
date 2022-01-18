const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'pfp',
    aliases: ['profilepic', 'avatar', 'av'],
    async run (client, message, args) {
      let user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => null) || message.author 
      const embed = new MessageEmbed()
        .setTitle(`${user.tag}'s avatar:`)
        .setColor('RANDOM')
//        .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
        .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
        .setTimestamp()
        .addFields([
        { name: 'PNG', value: `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })})`, inline: true },
        { name: 'JPG', value: `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'jpg' })})`, inline: true },
        { name: 'WEBP', value: `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'webp' })})`, inline: true }
      ])
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    }
}