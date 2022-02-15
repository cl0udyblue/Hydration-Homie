const { request } = require('undici')
const { MessageEmbed, MessageAttachment } = require('discord.js')
module.exports = {
name: "green",
async run(client, message, args) {

    let user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => null) || message.author 

    let av = `https://some-random-api.ml/canvas/green?avatar=${user.avatarURL({ size: 4096, dynamic: true,format: 'png' })}`    

    const res = await request(av) //basically the image url

if (res.statusCode !== 200) { //check if it isnt 200 OK
        console.log(JSON.parse(res.body)) //console.log the error
        message.channel.send(`\n\nError: ${(JSON.parse(res.body)).error}`) //send error message
        return
    }
    let attachment = new MessageAttachment(res.body, 'join.png') //make attachment using the buffer
    message.channel.send({ files: [attachment]}); //send attachment
}
}