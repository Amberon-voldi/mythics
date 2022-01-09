const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')
const { AudioFilters } = require('jericho-player')

module.exports = {
  name: 'filter',
  aliases: ['filt', 'audiofilter', 'filters', 'fil'],
  usage: 'ft?filter 8D true',
  async execute(bot, message, args) {
    var Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.playing)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nFilter can't be implemented",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    } else if (!args[0]) {
      const ReturnEmbed = {
        title: 'Queue Filters Stats',
        description: `__**Active Filters**__\n${Queue.enabledFilters.join(
          `\n`,
        )}__**In-Active Filters**__\n${Queue.disabledFilters.join(`\n`)}`,
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    var success = false
    if (args[0]) {
      AudioFilters[`${args[0]}`] = !Queue.filters[`${args[0]}`]
      success = Queue.setFilters(AudioFilters, !!args[1])
    } else success = Queue.setFilters(undefined, !!args[1])
    if (success) {
      const ReturnEmbed = {
        title: `${
          Queue.filters[`${args[0]}`]
            ? `${args[0]} Filter has been Added`
            : `Filters has been Removed`
        }`,
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: 'Filter Manupulation is having Errors',
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
