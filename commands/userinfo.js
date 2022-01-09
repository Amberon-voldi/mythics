const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js')
const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'userinfo',
  aliases: ['whois', 'info'],
  usage: 'm!userinfo',
  async execute(bot, message, args) {
    const user = message.mentions.member || message.author;
 

    const embed = new MessageEmbed();
    embed
       
        
        .setTitle('User Info')
        .setColor(0x333333)
       
        .setThumbnail(user.avatarURL({dynamic:true}))
        .addFields(
            {
                name:"Name",
                value:`${user.displayName}`
            },
            {
                name: "User ID",
                value: `${user.id}`,
                inline:false
            },
            {
                name: "Roles",
                value: "welp"
            }
        )
     
        
      
        .setTimestamp();

    message.reply({ embeds: [embed] });
    
  },
};
