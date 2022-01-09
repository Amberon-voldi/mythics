const { MessageEmbed } = require('discord.js');

module.exports = ('queueEnd',
(bot, queue) => {
  const Embed = new MessageEmbed()
    .setTitle('Music Player')
    .setDescription('Queue has been Ended !!')
    .setColor(0x333333);
  return void queue.metadata.message.channel.send({ embeds: [Embed] });
});
