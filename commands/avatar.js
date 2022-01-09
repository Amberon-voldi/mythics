const { MessageEmbed } = require('discord.js');
const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'avatar',
  aliases: ['av'],
  usage: 'm!ping',
  async execute(bot, message, args) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new MessageEmbed()
        .setColor(0x333333)
        .setAuthor(user.username)
        
        .setImage(user.avatarURL({ dynamic: true }))
        .setTimestamp()
        
    message.channel.send({embeds: [avatarEmbed]});
  },
};
