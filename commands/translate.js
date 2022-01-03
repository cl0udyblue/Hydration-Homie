const { MessageEmbed } = require('discord.js');
const translate = require("@iamtraction/google-translate");
module.exports = {
name: "translate",
description: "translate text to english!",
aliases: ['en', 'english', 'toen'],

run: async (client, message, args) => {

    const query = args.join(" ");

    if (!query) return message.reply('Please tell me what to translate!');

    translate(query, { to: 'en' }).then(res => {
  //      message.channel.send(res.text);
  message.channel.send({
    embeds: [
        new MessageEmbed()
            .setTitle(`Translate to English`)
            .setDescription(`${res.text}`)
            .setColor('RANDOM')
            .setTimestamp(new Date(res.written_on).getTime())
            .setFooter(`${message.author.tag} via Google Translate`)
    ]
})
      }).catch(err => {
        console.error(err);
      });

}
}