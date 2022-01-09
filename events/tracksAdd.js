const { MessageEmbed } = require('discord.js');

module.exports = ('tracksAdd',
(bot, queue, tracks) => {
  const Embed = new MessageEmbed()
    .setTitle('Music Player')
    .setDescription(
      `${
        tracks.length > 1 ? `\`${tracks.length}\` Songs` : 'Song'
      } has been Added to Queue\n**RequestedBy :** \`${
        tracks[0].requestedBy.username
      }\``,
    )
    .setColor(0x333333);
  return void queue.metadata.message.channel.send({ embeds: [Embed] });
});
