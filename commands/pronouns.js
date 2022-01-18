const { request } = require('undici')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'pronouns',
    aliases: [],
    run: (client, message, args) => {
        ;(async () => {
            const user = message.mentions.users.first() || message.author

            const pronounMap = {                
                unspecified: 'Unspecified, has not signed up for pronoundb.',
                hh: 'he/him',
                hi: 'he/it',
                hs: 'he/she',
                ht: 'he/they',
                ih: 'it/him',
                ii: 'it/its',
                is: 'it/she',
                it: 'it/they',
                shh: 'she/he',
                sh: 'she/her',
                si: 'she/it',
                st: 'she/they',
                th: 'they/he',
                ti: 'they/it',
                ts: 'they/she',
                tt: 'they/them',
                any: 'Any pronouns',
                other: 'Other pronouns',
                ask: 'Ask me my pronouns',
                avoid: 'Avoid pronouns, use my name',
            }

            const pronounsData = await request(
                `https://pronoundb.org/api/v1/lookup?platform=discord&id=${user.id}`
            )
            const pronouns = await pronounsData.body.json()
            await message.reply({
                embeds: [
                    new MessageEmbed()
                        .setTitle(`${message.mentions.users.first()}'s pronouns` || `Your pronouns`)
                        .setDescription(`${pronounMap[pronouns.pronouns]}`)
                        .setColor('RANDOM')
                        .setFooter('All data from pronoundb.org')
                ],  allowedMentions: { repliedUser: false } 
            })
        })()
    },
}