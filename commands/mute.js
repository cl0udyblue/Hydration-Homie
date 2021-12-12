module.exports = {
name: "mute",
run : (client, message, [mention, ...reason]) => {
   
  const adminPerm = client.config.adminPerm
  if (!adminPerm)
    return message.reply("You can't use this command.")

    if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to mute");

  if (!message.guild.me.permissions.has("MANAGE_GUILD"))
    return message.reply("I don't have the `MANAGE_GUILD` permission");

    const member = message.mentions.members.first();
    member.roles.add('910725987988303952');
    message.reply('User was muted!');

  },
}