const { MessageEmbed } = require('discord.js');

module.exports = ('channelEmpty',
(bot, queue, VoiceChannel) => {
  const Embed = new MessageEmbed()
    .setTitle('Music Player')
    .setDescription(`Voice Channel is Empty Now - <#${VoiceChannel.id}>`)
    .setColor(0x333333);
  return void queue.metadata.message.channel.send({ embeds: [Embed] });
});
