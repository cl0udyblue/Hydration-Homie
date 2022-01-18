const { MessageEmbed, WebhookClient } = require('discord.js')
module.exports = {
    name: "spoiler",
    aliases: ['spoil', 'censor', 'cw'],
    description: 'Censor a message!',
    async run(client, message, args) {
        const user = message.author
        if (!message.attachments.size) return message.reply({ content:'You must attatch something for me to spoiler!', allowedMentions: { repliedUser: false } })
        else{
            let text = args.join(" ");
        const webhookTest = await message.channel.createWebhook(`${user.username}`, {
        avatar: `${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })}`,
        reason: 'Spoiler image!'
 })
    const NOSimg = message.attachments
    const url = webhookTest.url
    const wc = new WebhookClient({url: url})
    const things = [] //makes an empty array
    for (const [,attachment] of message.attachments) {//loops through everything in message.attachments, you can access it with attachment
      attachment.setSpoiler() //spoilers the attachment
      things.push(attachment) //puts the attachment in the array defined above
    }
    if(!args[0]) {
    await wc.send({ files: things })}
    else{
    await wc.send({ content: `||${text}||`, files: things })
    }
    message.delete()
    await wc.delete() 
}}}