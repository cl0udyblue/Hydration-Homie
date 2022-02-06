const { MessageEmbed } = require('discord.js')
const { request } = require('undici')
module.exports = {
    name: 'info',
    aliases: ['user', 'member', 'roles', 'id', 'userid'],
    async run(client, message, args) {
    const user = message.mentions.users.first() ?? await client.users.fetch(args[0]).catch(() => null) //user, this just removes !info without args
  

    //INITIAL ARGS CHECK


    if (!user){
        return message.reply({content:`Please specify a user to get info on!`, allowedMentions: { repliedUser: false } })
    }
    if(!args[0]){
        return message.reply({content:`Please specify a user to get info on!`, allowedMentions: { repliedUser: false } })
    };




    //TIMESTAMPS


    let stamp = Math.floor(user.createdTimestamp / 1000)
    stamp = `<t:${stamp}:R>`;
    let stamp2 = Math.floor(user.createdTimestamp / 1000)
    stamp2 = `<t:${stamp2}>`;



    //BADGES


    const flagEmojis = {
        'HOUSE_BALANCE': '<:BadgeBalance:938876196593225779>',
        'HOUSE_BRAVERY': '<:BadgeBravery:938875675916525598>',
        'HOUSE_BRILLIANCE': '<:BadgeBrilliance:938876118969253939>',
        'EARLY_SUPPORTER': '<:EarlySupporter:939222381753425931>',
        'DISCORD_CERTIFIED_MODERATOR': '<:CertMod:939222423239290912>'
      }




    //PRONOUNS


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





// MEMBER SECTION

    const member = message.mentions.members.first() ?? await message.guild.members.fetch(args[0]).catch(() => null)
    
    if (member) {
        
        let joinstamp = Math.floor(member.joinedTimestamp / 1000)
        joinstamp = `<t:${joinstamp}:R>`

           let perms = member.permissions.toArray()
           perms = perms.toString()
           let string = perms.toLowerCase()
           const newString = string.split(', ')
           newString[0] = newString[0].toLocaleUpperCase()
           string = newString.join('')
        const color = member.displayColor
        let roles = []
        member.roles.cache.forEach(i => roles.push(`<@&${i.id}>`))
        if(member.permissions.has(`ADMINISTRATOR`)){
            console.log(user.flags.toArray().map(f => flagEmojis[f]))
            message.reply({
                 embeds:[new MessageEmbed()
                //.setColor(`RANDOM`)
                .setTitle(`Info on ${user.tag}.`)
                .setThumbnail(`${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })}`)
                .setDescription(`**Mention**: <@${user.id}>
                **User ID**: \`${member.id}\`
                **Pronouns**: ${pronounMap[pronouns.pronouns]}
                **Badges**: ${user.flags.toArray().map(f => flagEmojis[f])}
                **Date created**: ${stamp2}
                **Date joined**: ${joinstamp}

                **Roles**:
                ${roles.join(" ")}

                **Permissions**:
                \`ADMINISTRATOR\`
                `)], allowedMentions: { repliedUser: false } })}

        else if(!member.permissions.has('ADMINISTRATOR')) {
            message.reply({
                embeds:[new MessageEmbed()
                    //.setColor(`RANDOM`)
                    .setTitle(`Info on ${user.tag}.`)
                    .setThumbnail(`${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })}`)
                    .setDescription(`**Mention**: <@${user.id}>
                    **User ID**: \`${member.id}\`
                    **Pronouns**: ${pronounMap[pronouns.pronouns]}
                    **Date created**: ${stamp2}
                    **Date joined**: ${joinstamp}
    
                    **Roles**:
                    ${roles.join(" ")}
    
                    **Permissions**:
                    ${string}
                    `)], allowedMentions: { repliedUser: false } })
        }
    }
    
    else {
        message.reply({ embeds:[new MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Info on ${user.tag}.`)
            .setDescription(`Mention: <@${user.id}>`)
            .setThumbnail(`${user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' })}`)
            .addFields([
                { name: 'ID', value: `${user.id}`, inline: true },
                { name: 'Date created', value: `${stamp2}
                ${stamp}`, inline: true }
              ])], allowedMentions: { repliedUser: false } })
    }
}
}