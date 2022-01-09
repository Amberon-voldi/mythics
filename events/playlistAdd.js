const { MessageEmbed } = require('discord.js');

module.exports = ('playlistAdd',
(bot, queue, tracks) => {
  const Embed = new MessageEmbed()
    .setTitle('Music Player')
    .setDescription(
      `Bot has Added a Playlist with \`${tracks.length}\` Songs`,
    )
    .setColor(0x333333);
  return void queue.metadata.message.channel.send({ embeds: [Embed] });
});
