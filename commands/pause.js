const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'pause',
  aliases: ['pau', 'pa'],
  usage: 'ft?pause',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.tracks[0])) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description: 'No Songs are playing in `Queue`\nOR, Next Track is not Present in Queue\nSongs can\'t be `Paused`',
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    }
    const success = Queue.pause();
    if (success) {
      const ReturnEmbed = {
        title: 'Songs has been Paused',
      };
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message));
    }
    const ErrorEmbed = {
      title: 'Songs can\'t be Paused',
    };
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
  },
};