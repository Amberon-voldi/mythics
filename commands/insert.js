const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'insert',
  aliases: ['ins', 'insr'],
  usage: 'ft?insert 6 "Despacito"',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.tracks[0])) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description: 'No Songs are playing in `Queue`\nOR, Extra Tracks is not Present in Queue\nSongs can\'t be `Insert`',
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    } if (
      args[0]
      && (Number(args[0]) >= Queue.tracks.length || Number(args[0]) === 0)
    ) {
      const ErrorEmbed = {
        title: 'Invalid Track Index',
        description: `\`${Number(
          args[0],
        )}\` Song can't be Inserted\nQueue's Tracks don't validate with that Index`,
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    }
    if (!args[1]) {
      const ErrorEmbed = {
        title: 'Invalid Query',
        description: '`Invalid` Query can\'t be Inserted',
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    }
    const Index = args.shift();
    const success = await Queue.insert(
      args.join(),
      Number(Index) ?? undefined,
      message.author,
    );
    if (success) {
      const ReturnEmbed = {
        title: 'Song has been Inserted',
      };
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message));
    }
    const ErrorEmbed = {
      title: 'Song can\'t be Insert',
    };
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
  },
};
