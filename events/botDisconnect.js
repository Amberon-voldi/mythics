const { MessageEmbed } = require('discord.js')

module.exports =
  ('botDisconnect',
  (bot, queue, VoiceChannel) => {
    const Embed = new MessageEmbed()
      .setTitle('Music Player')
      .setDescription(
        `Bot has been \`Disconnected\` from ${
          VoiceChannel ? `<#${VoiceChannel.id}>` : 'Unknown/Deleted Channel'
        }`,
      )
      .setColor(0x333333)
    return void queue.metadata.message.channel.send({ embeds: [Embed] })
  })
