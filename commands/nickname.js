module.exports = {
  name: "nickname",
  description: "Change the Nickname of other Users",
  permissions: ["MANAGE_NICKNAMES"],
  aliases:['nick'],
  async run(client, message, args){
    if (!message.member.permissions.has('MANAGE_GUILD')) return message.reply("You do not have required permissions to run this command!");
 
    let mentionMember = message.mentions.members.first();
    let newNickname = args.slice(1).join(" ");

    if (!mentionMember) {
      return message.reply("Please specify a user.");
    }
    if (!newNickname) {
      return message.reply("Please specify a new nickname.");
    }
    try {
      mentionMember.setNickname(newNickname);
    } catch (error) {
      console.error(err);
      message.reply({ content: "I cannot change that user's nickname, please put my role above the user in question's role!",  allowedMentions: { repliedUser: false } }        );
    }
    message.reply({ content:`Changed ${mentionMember}'s nickname to ${newNickname}`,  allowedMentions: { repliedUser: false } 
      });
    }
};