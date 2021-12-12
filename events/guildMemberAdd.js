const { Permissions } = require("discord.js");

module.exports = (client, member) => {
  const defaultChannel = member.guild.channels.cache.find();
  defaultChannel.send(`Welcome ${member.user} to this server.`).catch(console.error);
}