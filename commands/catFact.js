const { request } = require('undici');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'catfact',
    description: 'Get a random cat fact!',
    aliases: ['catf', 'cf'],
    async run(client, message, args) {
        if(!message.guild.me.permissions.has(['SEND_MESSAGES'])) return;

        const factData = await request(
            `https://catfact.ninja/fact`
        )
        const fact = await factData.body.json()
       message.reply({ content:`${fact.fact}`, allowedMentions: { repliedUser: false } })
    }};