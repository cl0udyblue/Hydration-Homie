const { MessageCollector, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kiss',
    run: (client, message, args) => {
        const image_api = require('anime-images-api')

    const api = new image_api('GET')
    let person = message.mentions.members.first()

    api.sfw.kiss().then(response => {
        if (!message.mentions.users.size) {
            const errorembed = (
                new MessageEmbed()
                .setTitle(`No User Specified!`)
                .setColor('RANDOM')
            )
        return message.reply({ embeds: [errorembed],  allowedMentions: { repliedUser: false }  })
        }
        const embedone = (
            new MessageEmbed()
            .setDescription(`${message.author} **kissed** ${person}!`)
            .setColor('RANDOM')
            .setImage(`${response.image}`)
        )
        message.reply({ embeds: [embedone],  allowedMentions: { repliedUser: false }  })
}) 

}
}