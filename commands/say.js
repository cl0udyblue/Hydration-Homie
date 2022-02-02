const { MessageReaction } = require("discord.js")

module.exports = {
    name: "say",
    aliases: ['broadcast'],
    description: "have the bot say something",
    async run(client, message, args){
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply({content:'You need to be a moderator to use this command!', allowedMentions: { repliedUser: false }})
        if(!args[0]) return message.reply({content:'Specify something for me to say.', allowedMentions: { repliedUser: false }});

        message.channel.send(args.join(' '))
}
}