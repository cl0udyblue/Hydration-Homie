module.exports = {
    name: "twitch",
    run: (client, message, args) => {
message.channel.send({ embeds: [{
    color: 3447003,
    author: {
      name: "Beebot by CloudyBlue",
      icon_url: ""
    },
    thumbnail: {
      url: "https://media.discordapp.net/attachments/894756746705387540/895057809056620634/image0.png?width=585&height=585"
    },
    image: {
      url: ""
    },
    title: "CloudyBlue on Twitch",
    url: "https://twitch.tv/cloudybluelive",
    description: "CloudyBlue streams every other day on Twitch! Go check them out!",
  }]})}};