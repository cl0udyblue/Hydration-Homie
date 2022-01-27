const { MessageEmbed, Discord } = require('discord.js')
module.exports = {
name: "panda",
async run(client, message, args){
    const animal = require('animal-api')
    animal.panda(link => {
        message.channel.send(link)
    })
    },
};