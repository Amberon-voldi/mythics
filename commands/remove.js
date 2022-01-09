const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'remove',
  aliases: ['rem', 're'],
  usage: 'ft?remove 6 2',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.tracks[1])) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nOR, Extra Tracks is not Present in Queue\nSongs can't be `Removed`",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    if (Number(args[0]) >= Queue.tracks.length || Number(args[0]) === 0) {
      const ErrorEmbed = {
        title: 'Invalid Track Index',
        description: `\`${Number(
          args[0],
        )}\` Song can't be Removed\nQueue's Tracks don't validate with that Index`,
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const success = Queue.remove(
      Number(args[0]) ?? undefined,
      args[1] ?? undefined,
    )
    if (success) {
      const ReturnEmbed = {
        title: 'Song has been Removed',
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: "Song can't be Removed",
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
