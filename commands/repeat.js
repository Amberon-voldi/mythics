const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')
const { DefaultModesTypes } = require('jericho-player')

module.exports = {
  name: 'repeat',
  aliases: ['rp', 'repe'],
  usage: 'ft?repeat queue/track/off 2',
  async execute(bot, message, args) {
    const Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.current)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nSongs can't be `Repeated`",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const success = Queue.repeat(
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
      args[1] ?? 1,
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
        } has been Repeated ${args[1] ?? 1} times`,
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    } else if (args[0] && args[0].toLowerCase().trim() === 'off') {
      const ReturnEmbed = {
        title: `Repeat Mode has been Deactivated!!`,
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
      } can\'t be Repeated`,
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
