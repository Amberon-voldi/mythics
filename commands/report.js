const { Utils } = require('jericho-player')
const { ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
  name: 'report',
  aliases: ['rep', 'repo'],
  usage: 'ft?report discord.js',
  async execute(bot, message, args) {
    const ReturnEmbed = {
      title: 'Deps Stats',
      description: `${
        args[0]
          ? `${args[0]} : ${
              Utils.ScanDeps(args.join())
                ? `v${Utils.ScanDeps(args.join())}`
                : 'not found in package.json'
            }`
          : Utils.ScanDeps()
      }`,
    }
    return void (await ReturnEmbedGen(bot, ReturnEmbed, message))
  },
}
