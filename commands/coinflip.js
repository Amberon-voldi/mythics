const { MessageEmbed } = require('discord.js');
const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'flipcoin',
  aliases: ['flip'],
  usage: 'm!flipcoin',
  async execute(bot, message, args) {
    try {
        const choices= ["heads", "tails"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    const embed = new MessageEmbed();
    embed
     .setTitle("Coinflip!")
     .setDescription(`You flipped a **${choice}**!`)
     .setTimestamp()
    message.reply({ embeds: [embed] });
        
    } catch (error) {
        
    }
  },
};
