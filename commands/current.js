const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'current',
  aliases: ['cu', 'cur', 'nowplaying', 'np', 'nowp'],
  usage: 'ft?unmute 105',
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
    const track = Queue.current
    const ReturnEmbed = {
      title: 'Current Track Stats',
      description: `__**Track Details**__\n**Track ID :** \`${track.Id}\`\n**Name :** \`${track.title}\`\n**Author :** \`${track.channelId}\`\n**Duration :** \`${track.human_duration}\`\n**URl :** [Track Url](${track.url})`,
      image: track.thumbnail,
      field: {
        title: `Track Progress Bar`,
        value: Queue.createProgressBar(),
      },
    }
    return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
  },
}
