const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'clearqueue',
  aliases: ['cq', 'clearq'],
  usage: 'ft?clearqueue 5',
  async execute(bot, message, args) {
    var Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.playing)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nSong can't be `Fetched from Queue`",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const success = await Queue.clear(args[0] ? Number(args[0]) : undefined)
    if (success) {
      const ReturnEmbed = {
        title: 'Queue has been Cleared',
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: 'Queue cant be Cleared!',
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
