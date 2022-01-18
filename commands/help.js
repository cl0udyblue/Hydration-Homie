const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Help command',
     run: (client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle(`:mailbox_with_mail: You have mail! Check your DMs!`)
        .setColor('RANDOM')


        const dmbed = new MessageEmbed()
        .setColor('RANDOM')
        .addFields([
            { name: 'Commands', value: `[Link](https://froggie.cc#commands)`, inline: true},
            { name: 'Invite me', value: `[Link](https://discord.com/api/oauth2/authorize?client_id=917288138156683285&permissions=1402776972391&scope=bot)`, inline: true },
            { name: 'Join my support server', value: `[Link](https://discord.gg/4s7vkhKtjk)`, inline: true }
          ])
      message.react(`<:checkmark:931985342754607155>`) 
      message.reply({ embeds:[embed], allowedMentions: { repliedUser: false } })
      message.author.send({ embeds:[dmbed] })
     }};