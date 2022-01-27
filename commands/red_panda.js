const { MessageEmbed, Discord } = require('discord.js')
module.exports = {
name: "redpanda",
async run(client, message, args){
    const animal = require('animal-api')
    animal.redpanda(link => {
        message.channel.send(link)
    })
    },
};