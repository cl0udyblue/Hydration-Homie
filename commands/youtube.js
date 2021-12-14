const yts = require('yt-search');

module.exports = {
    name: 'youtube',
    async run(client, message, args) {
        if (!args.length) return message.reply('No search query given')
        const searched = await yts.search(args.join(' '));
        message.reply(!searched.videos.length ? 'No Results' : searched.videos[0].url);
    }
}