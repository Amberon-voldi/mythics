const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'resume',
  aliases: ['res', 'resu', 'unpause'],
  usage: 'ft?resume',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.tracks[0])) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nOR, Next Track is not Present in Queue\nSongs can't be `Resumed/Un-Paused`",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const success = Queue.resume()
    if (success) {
      const ReturnEmbed = {
        title: 'Songs has been Resumed/Un-Paused',
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: "Songs can't be Resumed/Un-Paused",
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
