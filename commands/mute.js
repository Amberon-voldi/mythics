const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'mute',
  aliases: ['mu'],
  usage: 'ft?mute',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description: 'No Songs are playing in `Queue`\nSongs can\'t be `Muted`',
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    }
    const success = Queue.mute();
    if (success) {
      const ReturnEmbed = {
        title: 'Songs has been Muted',
      };
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message));
    }
    const ErrorEmbed = {
      title: 'Songs can\'t be Muted',
    };
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
  },
};
