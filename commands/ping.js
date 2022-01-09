const { MessageEmbed } = require('discord.js');
const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'ping',
  aliases: ['ping', 'pi'],
  usage: 'm!ping',
  async execute(bot, message, args) {
    const ErrorEmbed = {
      title: 'Pong',
      description: ` Ping- ${bot.ws.ping} ms.`,
    };

    return void (await ReturnEmbedGen(bot, ErrorEmbed, message));
  },
};
