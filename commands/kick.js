module.exports = { 
    name: "kick",
    run: (client, message, [mention, ...reason]) => {
      const adminPerm = client.config.adminPerm
      if (!adminPerm)
    return message.reply("You can't use this command.")

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.guild.me.permissions.has("KICK_MEMBERS"))
    return message.reply("I don't have the `KICK_MEMBERS` permission");




  const kickMember = message.mentions.members.first();
    kickMember.kick()
    message.reply(`${kickMember.user.username} was successfully kicked.`);
  },
}