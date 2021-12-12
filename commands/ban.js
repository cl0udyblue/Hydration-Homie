module.exports = { 
    name: "ban",
    run: (client, message, [mention, ...reason]) => {
        const adminPerm = client.config.adminPerm
        if (!adminPerm)
    return message.reply("You can't use this command.")

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to ban");

  if (!message.guild.me.permissions.has("BAN_MEMBERS"))
    return message.reply("I don't have the `BAN_MEMBERS` permission");




  const banMember = message.mentions.members.first();
    banMember.ban()
    message.reply(`${banMember.user.username} was successfully banned.`);
  },
}