const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')
const { DefaultModesTypes } = require('jericho-player')

module.exports = {
  name: 'autoplay',
  aliases: ['ap', 'autop'],
  usage: 'ft?autoplay "Despacito"',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.current)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nSongs can't be `Autoplay`",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const success = Queue.autoplay(
      args[0]
        ? args[0].toLowerCase().trim() === DefaultModesTypes.Off
          ? DefaultModesTypes.Off
          : `${args[0]}`
        : undefined,
    )
    if (success) {
      const ReturnEmbed = {
        title: `AutoPlay has been Activated`,
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    } else if (args[0] && args[0].toLowerCase().trim() === 'off') {
      const ReturnEmbed = {
        title: `AutoPlay has been Deactivated!!`,
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: `AutoPlay can't be Activated`,
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
