const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'back',
  aliases: ['b', 'bk'],
  usage: 'ft?back 2',
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
    const success = await Queue.back(
      args[0] ? Number(args[0]) : 0,
      message.author,
      {},
      true,
    )
    if (success) {
      const ReturnEmbed = {
        title: 'Previous Track has been Stacked',
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: 'Previous Tracks is not Present in Cache',
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
