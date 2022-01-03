const { MessageCollector, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'pfp',
    aliases: ['profilepic', 'avatar', 'image'],
    run: (client, message, args) => {
        const user = message.mentions.users.first() || message.author;
        const embed = new MessageEmbed()
                            .setTitle(`${user.username}'s avatar`)
                            .setColor('RANDOM')
                            .setImage(user.displayAvatarURL({ dynamic: true}));
        message.channel.send({ embeds: [embed] })
    }
}