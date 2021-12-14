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

const mutedRole = message.guild.roles.cache.find(
 (role) => role.name === 'muted'
);

if (!mutedRole){
 return message.channel.send('There is no role called `muted` on this server!')}
 const target = message.mentions.members.first();
 target.roles.add(mutedRole);
 message.channel.send('User was muted!');
  },
};