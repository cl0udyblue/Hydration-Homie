const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Help command',
    async run (client, message, args) {
      if(!message.guild.me.permissions.has(['SEND_MESSAGES'])) return;
      if(!message.guild.me.permissions.has(['ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS'])) return message.reply('I don\'t have the `ADD_REACTIONS` and `USE_EXTERNAL_EMOJIS` permissions!')

        const embed = new MessageEmbed()
        .setTitle(`:mailbox_with_mail: You have mail! Check your DMs!`)
        .setColor('RANDOM')
        
        const dmrow = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setLabel('Docs')
            .setStyle('LINK')
            .setURL('https://docs.froggie.cc'),
          new MessageButton()
            .setLabel('Support Server')
            .setStyle('LINK')
            .setURL('https://discord.com/invite/4s7vkhKtjk'),
          new MessageButton()
            .setLabel('Invite Me')
            .setStyle('LINK')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=917288138156683285&permissions=1402776972391&scope=bot')
        );

        const dmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Having trouble with Froggie?')
        .setDescription('Feel free to check out Froggie\'s docs to see how commands work! If you\'re having more trouble, don\'t hesitate to join the support server! If you\'re just here to invite the bot, that\'s linked below as well! :D (p.s. check out Froggie\'s new website, [froggie.cc](https://froggie.cc)!')
        //.addFields([
        //    { name: 'Commands', value: `[Link](https://froggie.cc#commands)`, inline: true},
        //    { name: 'Invite me', value: `[Link](https://discord.com/api/oauth2/authorize?client_id=917288138156683285&permissions=1402776972391&scope=bot)`, inline: true },
        //    { name: 'Join my support server', value: `[Link](https://discord.gg/4s7vkhKtjk)`, inline: true }
        //  ])
        try{
     await message.react(`<:checkmark:931985342754607155>`) 
        } catch(err){
          message.reply('An error occurred! Please make sure you have your DMs turned **on** for this server!')
        }
        try{
          await message.react(`<:checkmark:931985342754607155>`) 
          await message.reply({ embeds:[embed], allowedMentions: { repliedUser: false } })
          await message.author.send({ embeds:[dmbed], components:[dmrow] })
             } catch(err){
               message.reply('An error occurred! Please make sure you have your DMs turned **on** for this server!')
             }
     }};