const { MessageEmbed, Discord } = require('discord.js')
module.exports = {
name: "cat",
async run(client, message, args){
    const animal = require('animal-api')
    animal.cat(link => {
        message.channel.send(link)
    })
    },
};