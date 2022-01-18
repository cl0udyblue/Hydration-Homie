module.exports = { 
  name: "kick",
  run: (client, message, [mention, ...reason]) => {
    const adminPerm = client.config.adminPerm
    if (!adminPerm)
  return message.reply({ content:"You can't use this command.",  allowedMentions: { repliedUser: false } })

if (message.mentions.members.size === 0)
  return message.reply({ content:"Please mention a user to kick",  allowedMentions: { repliedUser: false } });

if (!message.guild.me.permissions.has("KICK_MEMBERS"))
  return message.reply({  content:"I don't have the `KICK_MEMBERS` permission",  allowedMentions: { repliedUser: false } });




const kickMember = message.mentions.members.first();
  kickMember.kick()
  message.reply({ content:`${kickMember.user.username} was successfully kicked.`,  allowedMentions: { repliedUser: false } });
},
}