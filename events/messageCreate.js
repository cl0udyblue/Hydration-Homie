    module.exports = async (client, message) => {
        if(message.channel.id === "1266484679167705099" && message.content !== "joop") {
            try{
            message.delete()
        } catch(err) {
            console.log(err)

        }
        }
    if (message.author.bot) return;
    if (message.content.indexOf(client.prefix) !== 0) return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));
    if (!cmd) return;
    try {
    await cmd.run(client, message, args);
    } catch(err) {
        console.log(err)
    }    
  };
