const { MessageCollector, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'hug',
    run: (client, message, args) => {
        const image_api = require('anime-images-api')

    const api = new image_api('GET')
    let person = message.mentions.members.first()

    api.sfw.hug().then(response => {
        if (!message.mentions.users.size) {
            const errorembed = (
                new MessageEmbed()
                .setTitle(`No User Specified!`)
                .setColor('RANDOM')
            )
        return message.channel.send({ embeds: [errorembed], allowedMentions: { repliedUser: false } })
        }
        const embedone = (
            new MessageEmbed()
            .setDescription(`${message.author} **hugged** ${person}!`)
            .setColor('RANDOM')
            .setImage(`${response.image}`)
        )
        message.channel.send({ embeds: [embedone], allowedMentions: { repliedUser: false }  })
}) 

}
}