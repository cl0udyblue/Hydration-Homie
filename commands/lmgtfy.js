const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "lmgtfy",
    aliases: ["lmgt", "LMGTFY", "letmegooglethatforyou", "letmegooglethat", "google"],
    description: 'Let me Google that for you...',
    async run(client, message, args){
        if(!args[0]) return message.reply({content:'Please provide something for me to LMGTFY!', allowedMentions: { repliedUser: false }}); 
        else{
        message.reply({ embeds:[
            new MessageEmbed()
            .setTitle('Let me Google that for you :rolling_eyes:')
            .setURL(`https://letmegooglethat.com/?q=${args.join('%20')}`)
        ], allowedMentions: { repliedUser: false }})
        }
    }
}