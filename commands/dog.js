const { MessageEmbed, Discord } = require('discord.js')
module.exports = {
name: "dog",
async run(client, message, args){
    if(!message.guild.me.permissions.has(['SEND_MESSAGES'])) return;

    const animal = require('animal-api')
    animal.dog(link => {
        message.channel.send(link)
    })
    },
};