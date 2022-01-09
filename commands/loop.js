const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')
const { DefaultModesTypes } = require('jericho-player')

module.exports = {
  name: 'loop',
  aliases: ['lop', 'lp'],
  usage: 'ft?loop queue/track/off',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.current)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description: "No Songs are playing in `Queue`\nSongs can't be `Looped`",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const success = Queue.loop(
      (!args[0] || (args[0] && args[0].toLowerCase().trim() === 'track')
        ? DefaultModesTypes.Track
        : undefined) ??
        (args[0] && args[0].toLowerCase().trim() === 'queue'
          ? DefaultModesTypes.Queue
          : undefined) ??
        (args[0] && args[0].toLowerCase().trim() === 'off'
          ? DefaultModesTypes.Off
          : undefined) ??
        undefined,
    )
    if (
      success &&
      ((!args[0] || (args[0] && args[0].toLowerCase().trim() === 'track')
        ? DefaultModesTypes.Track
        : undefined) ??
        (args[0] && args[0].toLowerCase().trim() === 'queue'
          ? DefaultModesTypes.Queue
          : undefined) ??
        undefined)
    ) {
      const ReturnEmbed = {
        title: `${
          (!args[0] || (args[0] && args[0].toLowerCase().trim() === 'track')
            ? DefaultModesTypes.Track
            : undefined) ??
          (args[0] && args[0].toLowerCase().trim() === 'queue'
            ? DefaultModesTypes.Queue
            : undefined) ??
          undefined
        } has been Looped`,
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    } else if (args[0] && args[0].toLowerCase().trim() === 'off') {
      const ReturnEmbed = {
        title: `Loop has been Deactivated!!`,
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: `${
        (!args[0] || (args[0] && args[0].toLowerCase().trim() === 'track')
          ? DefaultModesTypes.Track
          : undefined) ??
        (args[0] && args[0].toLowerCase().trim() === 'queue'
          ? DefaultModesTypes.Queue
          : undefined) ??
        undefined
      } can\'t be Looped`,
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
