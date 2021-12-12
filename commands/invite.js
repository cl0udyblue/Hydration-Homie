module.exports = {
    name: 'invite',
    run: (client, message, args) => {
// Create an invite and send it in the channel
// You can only create an invite from a GuildChannel
// Messages can only be sent to a TextChannel
message.guild.channels.cache.get('910246208767946755').createInvite().then(invite =>
    message.channel.send(invite.url)
);
    }
}