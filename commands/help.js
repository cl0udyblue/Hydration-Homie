module.exports = {
    name: 'help',
    description: 'Help command',
     run: (client, message, args) => {
      message.channel.send(embed)
     }};