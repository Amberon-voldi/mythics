const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'unmute',
  aliases: ['un', 'unm', 'unmu'],
  usage: 'ft?unmute 105',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description: 'No Songs are playing in `Queue`\nSongs can\'t be `Un-Muted`',
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    }
    const success = Queue.unmute(Number(args[0]) ?? undefined);
    if (success) {
      const ReturnEmbed = {
        title: 'Songs has been Un-Muted',
      };
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message));
    }
    const ErrorEmbed = {
      title: 'Songs can\'t be Un-Muted',
    };
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
  },
};
