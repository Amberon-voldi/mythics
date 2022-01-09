const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'skip',
  aliases: ['sk', 'ski'],
  usage: 'ft?skip 6',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.tracks[1])) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description: 'No Songs are playing in `Queue`\nOR, Next Track is not Present in Queue\nSongs can\'t be `Skipped`',
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    }
    const success = Queue.skip(args[0] ?? undefined);
    if (success) {
      const ReturnEmbed = {
        title: 'Songs has been Skipped',
      };
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message));
    }
    const ErrorEmbed = {
      title: 'Songs can\'t be Skipped',
    };
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
  },
};
