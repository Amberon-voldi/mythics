const { MessageEmbed } = require('discord.js');

module.exports = ('trackEnd',
(bot, queue, track) => {
  const Embed = new MessageEmbed()
    .setTitle('Music Player')
    .setDescription(
      `__**Bot has Ended a Song Now**__\n**Name :** \`${track.title}\`\n**Url :** [Click here](${track.url})\n**Duration :** \`${track.human_duration}\`\n**Requested-By :** \`${track.requestedBy.username}\``,
    )
    .setColor(0x333333)
    .setImage(track.thumbnail);
  return void queue.metadata.message.channel.send({ embeds: [Embed] });
});
