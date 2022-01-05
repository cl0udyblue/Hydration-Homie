const { MessageCollector, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'pfp',
    aliases: ['profilepic', 'avatar', 'image'],
    run: (client, message, args) => {
        const user = message.mentions.users.first() || message.author;
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
        message.channel.send({ embeds: [embed] })
    }
}