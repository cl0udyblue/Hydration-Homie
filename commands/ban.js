module.exports = { 
  name: "ban",
  run: (client, message, [mention, ...reason]) => {
      const adminPerm = client.config.adminPerm
      if (!adminPerm)
  return message.reply({content:"You can't use this command.",  allowedMentions: { repliedUser: false }})

if (message.mentions.members.size === 0)
  return message.reply({content:"Please mention a user to ban",  allowedMentions: { repliedUser: false }});

if (!message.guild.me.permissions.has("BAN_MEMBERS"))
  return message.reply({content:"I don't have the `BAN_MEMBERS` permission",  allowedMentions: { repliedUser: false }});

const banMember = message.mentions.members.first();
  message.guild.bans.create(banMember)
  message.reply({ content:`${banMember.user.username} was successfully banned.`, allowedMentions: { repliedUser: false }});
},
}