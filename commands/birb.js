const { MessageEmbed, Discord } = require('discord.js')
module.exports = {
name: "bird",
aliases: ['birb'],
async run(client, message, args){
    const animal = require('animal-api')
    animal.birb(link => {
        message.channel.send(link)
    })
    },
};