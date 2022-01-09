const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'shuffle',
  aliases: ['shuff', 'shuf', 'randomize', 'shu'],
  usage: 'ft?shuffle',
  async execute(bot, message, args) {
    var Queue = bot.player.GetQueue(message.guild.id)
    if (!Queue || (Queue && !Queue.playing)) {
      const ErrorEmbed = {
        title: 'Empty Queue',
        description:
          "No Songs are playing in `Queue`\nShuffle can't be implemented",
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const success = Queue.shuffle()
    if (success) {
      const ReturnEmbed = {
        title: `Tracks Data has been Shuffled Completely`,
      }
      return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
    }
    const ErrorEmbed = {
      title: `Tracks Data can't be Shuffled`,
    }
    return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
  },
}
