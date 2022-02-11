const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "addemoji",
    aliases: ['addemote', 'ae', 'steal', 'add'],
    async run(client, message, args){
        if(!args[0]) return message.reply({content: 'Please specify what the emoji should be called!', allowedMentions: { repliedUser: false }})
        if (!message.attachments.size)
                return message.reply({
                    content: 'You must attatch an image to turn into an emoji!',
                    allowedMentions: { repliedUser: false },
                })
        let name = args.join('_')
        message.guild.emojis.create(message.attachments.first().url, name)
         .then(emoji => message.reply({ content:`Created new emoji with name ${emoji.name}!`, allowedMentions: { repliedUser: false } }))
         .catch(console.error);
    }
}