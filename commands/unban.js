module.exports = { 
  name: "unban",
  description: "unbans a user",
  run: (client, message, args) => {

  const adminPerm = client.config.adminPerm
  if (!adminPerm){
  return}

  if (args.length === 0){
  return message.reply("Please mention a user to unban")}

if (!message.guild.me.permissions.has("BAN_MEMBERS"))
  return message.reply("I don't have the `BAN_MEMBERS` permission");

  message.guild.bans.remove(args[0])
message.reply(`Unbanned <@${args[0]}> from ${message.guild.name}`)
.catch(console.error);
  }}