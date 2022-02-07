const { MessageEmbed } = require('discord.js');
const ms = require('ms')
module.exports = {
name: "unmute",
aliases: ['untimeout'],
async run (client, message, args) {
  if(!message.guild.me.permissions.has(['SEND_MESSAGES'])) return;
  if(!message.guild.me.permissions.has(['MODERATE_MEMBERS', 'MANAGE_MEMBERS'])) return message.reply({ content:(`I don't have the \`MANAGE_MEMBERS\` and \`MODERATE_MEMBERS\` permissions...`)})

  const embed =  new MessageEmbed()
  .setTitle(`Improper arguments provided! Please structure your command like this:`)
  .setDescription('`!!untimeout @user`')
  .setColor(`RANDOM`)

  if(!args[0]){
    return message.channel.send({ embeds:[embed] })
  }
  
  const member = message.mentions.members.first();


  if(!member){
    return message.channel.send(`You must specify a user to untimeout.`)
  }

  member.timeout(null)

  message.channel.send({ embeds:[
    new MessageEmbed()
    .setDescription(`Unmuted ${member}`)
    .setColor(`RANDOM`)
  ] })
}};