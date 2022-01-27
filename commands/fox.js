const { MessageEmbed, Discord } = require('discord.js')
module.exports = {
name: "fox",
async run(client, message, args){
    const animal = require('animal-api')
    animal.fox(link => {
        message.channel.send(link)
    })
    },
};