const { User, ReactionCollector } = require("discord.js");

module.exports = {
    name: "ping",
    run: (client, message, args) => {

       message.channel.send("pong!").catch(console.error);
    }
   };