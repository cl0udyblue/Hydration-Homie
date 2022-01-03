const got = require('got')
module.exports = {
    name: 'pronouns',
    run: (client, message, args) => {
        ;(async () => {
            const user = message.mentions.users.first() || message.author 

            const pronounMap = {
                
                unspecified: 'Unspecified',
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

            const pronounsData = await got.get(
                `https://pronoundb.org/api/v1/lookup?platform=discord&id=${user.id}`
            ) 
            const pronouns = await JSON.parse(pronounsData.body) 

            console.log(`${user.tag}'s pronouns are ${pronounMap[pronouns.pronouns]}`)
        })()
    },
}