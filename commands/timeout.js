const { MessageEmbed } = require('discord.js');
const ms = require('ms')
module.exports = {
name: "mute",
aliases: ['timeout'],
async run (client, message, args) {
  const embed =  new MessageEmbed()
  .setTitle(`Improper arguments provided! Please structure your command like this:`)
  .setDescription('`!!timeout @user time reason`')
  .setColor(`RANDOM`)

  if(!args[0]){
    return message.channel.send({ embeds:[embed] })
  }
  if(!args[1]){
    return message.channel.send({ embeds:[embed] })
  }
  if(!args[2]){
    return message.channel.send({ embeds:[embed] })
  }
  
  const member = message.mentions.members.first();
  const time = ms(args[1]);
  const reason = args.slice(1).join(" ")

  if(!member){
    return message.channel.send(`You must specify a user to timeout as the first argument! E.g. \`!timeout @member 7days innapropriate wierdchampness\`.`)
  }
  if(!time){
    return message.channel.send(`You must specify a duration up to 21 days to timeout a user!! E.g. \`!timeout @member 7days innapropriate wierdchampness\`.`)
  }
  if(!reason){
    return message.channel.send(`You must specify a reason for the user's timeout! E.g. \`!timeout @member 7days innapropriate wierdchampness\`.`)
  }
  if(member.isCommunicationDisabled()){
    return message.channel.send({embeds:[
      new MessageEmbed()
      .setDescription(`User is already in timeout!`)
      .setColor(`RANDOM`)
    ]});
  }
  member.timeout(time, reason)

  message.channel.send({ embeds:[
    new MessageEmbed()
    .setDescription(`Timed out ${member} for ${ms(time)}.`)
    .setColor(`RANDOM`)
  ] })
}};