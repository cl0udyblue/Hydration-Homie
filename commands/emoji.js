const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "emoji",
    aliases: ["jumbo"],
    async run(client, message, args){
        const hasEmoteRegex = /<a?:.+:\d+>/gm
        const emoteRegex = /<:.+:(\d+)>/gm
        const animatedEmoteRegex = /<a:.+:(\d+)>/gm
      
        const messages = await message.channel.messages.fetch()
        message = messages.find(m => m.content.match(hasEmoteRegex))
      
        if (emoji = emoteRegex.exec(message)) {
        const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".png?v=1"
        message.channel.send(url)
        }
        else if (emoji = animatedEmoteRegex.exec(message)) {
        const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".gif?v=1"
        message.channel.send(url)
        }
        else {
        message.channel.send("Couldn't find an emoji to paste!")
        }
    }
}