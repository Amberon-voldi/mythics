const { MessageEmbed } = require('discord.js')

module.exports =
  ('connectionError',
  (bot, ErrorMessage, queue, VoiceConnection, guildId) => {
    const Embed = new MessageEmbed()
      .setTitle('Music Player')
      .setDescription(
        `\`${ErrorMessage}\` Error for Guild -\`${queue.metadata.message.guild.name}\``,
      )
      .setColor(0x333333)
    return void queue.metadata.message.channel.send({ embeds: [Embed] })
  })
