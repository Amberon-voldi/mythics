const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'play',
  aliases: ['p', 'pl'],
  usage: 'ft?play "Despacito"',
  async execute(bot, message, args) {
    if (!args[0]) {
      const ErrorEmbed = {
        title: 'Invalid Query',
        description:
          'No Query has been Given to Play\nProvide Valid Query like `Despacito` or `Music Urls`',
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const Queue =
      bot.player.GetQueue(message.guild.id) ??
      bot.player.CreateQueue(message, { NoMemoryLeakMode: true,metadata: { message: message } })
    await Queue.play(args.join(), message.member.voice.channel, message.author)
    return void null
  },
}
