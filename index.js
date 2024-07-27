const { Client, Intents } = require("discord.js");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const token = process.env.token
const prefix = process.env.prefix
const ownerId = process.env.ownerId

console.log(token)

client.commands = new Discord.Collection();
//const generate = require("random-words");
const rword = require("rword");
const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`Loading command ${commandName}`);
  client.commands.set(command.name, command);
}

client.login(token);