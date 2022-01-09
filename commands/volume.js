const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'volume',
  aliases: ['vo', 'vol'],
  usage: 'ft?volume 105',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description: 'No Songs are playing in `Queue`',
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    } if (!args[0]) {
      const ReturnEmbed = {
        title: 'Volume Stats',
        description: `**Queue Volume/Current Volume :** \`${Queue.volume}\``,
      };
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message));
    }
    Queue.volume = args[0] ?? 95;
    const ReturnEmbed = {
      title: 'Volume Stats',
      description: `**Queue Volume/Changed Volume :** \`${Queue.volume}\``,
    };
    return void (await ReturnEmbedGen(bot, ReturnEmbed, message));
  },
};
