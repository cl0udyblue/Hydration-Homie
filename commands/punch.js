const { MessageCollector, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'punch',
    run: (client, message, args) => {
        const image_api = require('anime-images-api')

    const api = new image_api('GET')
    let person = message.mentions.members.first()

    api.sfw.punch().then(response => {
        if (!message.mentions.users.size) {
            const errorembed = (
                new MessageEmbed()
                .setTitle(`No User Specified!`)
                .setColor('RANDOM')
            )
        return message.channel.send({ embeds: [errorembed] })
        }
        const embedone = (
            new MessageEmbed()
            .setDescription(`${message.author} **punched** ${person}!`)
            .setColor('RANDOM')
            .setImage(`${response.image}`)
        )
        message.channel.send({ embeds: [embedone] })
}) 

}
}