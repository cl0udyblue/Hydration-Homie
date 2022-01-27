const { MessageEmbed, Discord } = require('discord.js')
module.exports = {
name: "dogbomb",
async run(client, message, args){
    const animal = require('animal-api')
    animal.dog(link => {
        message.channel.send(link)
    })
    animal.dog(link => {
        message.channel.send(link)
    })
    animal.dog(link => {
        message.channel.send(link)
    })
    animal.dog(link => {
        message.channel.send(link)
    })
    animal.dog(link => {
        message.channel.send(link)
    })
    },
};