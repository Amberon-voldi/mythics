const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'search',
  aliases: ['look', 'find'],
  usage: 'ft?search "Despacito"',
  async execute(bot, message, args) {
    if (!args[0]) {
      const ErrorEmbed = {
        title: 'Invalid Query',
        description:
          'No Query has been Given to Search\nProvide Valid Query like `Despacito` or `Music Urls`',
      }
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message))
    }
    const Queue =
      bot.player.GetQueue(message.guild.id) ?? bot.player.CreateQueue(message)
    var SearchResults = await Queue.search(args.join(), message.author, {
      ExtractorStreamOptions: { Limit: 10 },
    })
    SearchResults = SearchResults ? SearchResults.tracks : []

    var StringArrays = SearchResults.map(
      (track, index) =>
        `**Track Index :** \`${index}\`\n**Name :** \`${track.title}\`\n**Author :** \`${track.channelId}\`\n**URl :** [Track Url](${track.url})\n`,
    )
    StringArrays = StringArrays.slice(0, 10)
    StringArrays = StringArrays.filter(Boolean)
    if (SearchResults.length > StringArrays.length) {
      StringArrays.push(
        `More \`${Number(
          SearchResults.length - 10,
        )}+\` Tracks are Present in Search Results`,
      )
    }
    const ReturnEmbed = {
      title: `Search Results Stats`,
      description: `**Results of**\`${args.join()}\`\n\n${StringArrays.join(
        '\n',
      )}`,
    }
    return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
  },
}
