const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'seek',
  aliases: ['se', 'see', 'position', 'pos'],
  usage: 'ft?seek 02:00 00:00',
  async execute(bot, message, args) {
    var Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.playing)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nSong can't be `Edited from Queue`",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    } else if (!args[0]) {
      const ErrorEmbed = {
        title: 'Invalid Arguments',
        description: 'Wrong Arguments are Detected for Seek Method',
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const success = Queue.seek(args[0], args[1] ?? undefined)
    if (success) {
      const ReturnEmbed = {
        title: 'Seek Function is Completed',
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: 'Seek Function is not Completed',
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
