const { MessageEmbed, Discord } = require('discord.js')
module.exports = {
name: "catbomb",
async run(client, message, args){
    const animal = require('animal-api')
    animal.cat(link => {
        message.channel.send(link)
    })
    animal.cat(link => {
        message.channel.send(link)
    })
    animal.cat(link => {
        message.channel.send(link)
    })
    animal.cat(link => {
        message.channel.send(link)
    })
    animal.cat(link => {
        message.channel.send(link)
    })
    },
};