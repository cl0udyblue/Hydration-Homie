// @ts-check // Can be removed, used to check typings and valid actions
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Get bot ping.',
   run: (client, message, args) => {
    message.channel.send('Pong!')
   }};