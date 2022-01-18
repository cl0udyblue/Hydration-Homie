module.exports = {
    name: "purge",
    run: (client, message, args) => {
        const user = message.mentions.users.first();
        const adminPerm = client.config.adminPerm
        if (!adminPerm)
        return message.reply({ content:"You can't use this command.",  allowedMentions: { repliedUser: false } })
if (!/^\d+$/.test(message.content.split(" ")[1])) return message.reply('Please provide a valid number');

const amount = !!parseInt(message.content.split(" ")[1]) ? parseInt(message.content.split(" ")[1]) : parseInt(message.content.split(" ")[2])

if (amount > 100) {
    message.reply({ content:"The limit is 100 messages!",  allowedMentions: { repliedUser: false } })
    return;
};

if (!amount) return message.reply({ content:"Must specify an amount to delete!",  allowedMentions: { repliedUser: false } });
if (!amount && !user) return message.reply({ content:"Must specify a user and amount, or just an amount, of messages to purge!",  allowedMentions: { repliedUser: false } });
// Fetch 100 messages (will be filtered and lowered up to max amount requested)
message.channel.messages.fetch({ limit: amount }).then((messages) => {

    if (user) {
 const filterBy = user ? user.id : Client.user.id.catch(error => console.log(error.stack));
 messages = messages.filter(m => m.author.id === filterBy).map(e => e).catch(error => console.log(error.stack));
 }

 message.channel.bulkDelete(amount).catch(err => {
    message.reply({ content:':x: `Sorry, I cannot delete messages older than 14 days`',  allowedMentions: { repliedUser: false } }) })
})}};