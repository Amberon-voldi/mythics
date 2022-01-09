const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'queue',
  aliases: ['q'],
  usage: 'ft?queue 6',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.current)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nSong can't be `Fetched from Queue`",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    var Index =
      args[0] &&
      Number(args[0]) &&
      Number(args[0]) < Queue.tracks.length &&
      Number(args[0]) > 0
        ? Number(args[0])
        : 0

    var StringArrays = Queue.tracks.map(
      (track, index) =>
        `**Track Index :** \`${index}\`\n**Track ID :** \`${track.Id}\`\n**Name :** \`${track.title}\`\n**Author :** \`${track.channelId}\`\n**Duration :** \`${track.human_duration}\`\n**URl :** [Track Url](${track.url})\n`,
    )
    StringArrays = StringArrays.slice(Index, Index + 5)
    StringArrays = StringArrays.filter(Boolean)
    if (Queue.tracks.length > StringArrays.length) {
      StringArrays.push(
        `More \`${Number(
          Queue.tracks.length - (5 + Index),
        )}+\` Tracks are Present in Queue`,
      )
    }
    const ReturnEmbed = {
      title: 'Current Queue Stats',
      description: `__**Current ${Index + 1}/${
        Queue.tracks.length
      } Tracks Data**__\n\n${StringArrays.join('\n')}`,
      field: {
        title: `Queue Progress Bar`,
        value: Queue.createProgressBar('queue'),
      },
    }
    return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
  },
}
