const { MessageEmbed } = require('discord.js');

module.exports = ('trackStart',
(bot, queue, track) => {
  const Embed = new MessageEmbed()
    .setTitle('Music Player')
    .setDescription(
      `__**Bot is now Playing**__\n**Name :** \`${track.title}\`\n**Url :** [Click here](${track.url})\n**Duration :** \`${track.human_duration}\`\n**Requested-By :** \`${track.requestedBy.username}\``,
    )
    .setColor(0x333333)
    .setImage(track.thumbnail);
  return void queue.metadata.message.channel.send({ embeds: [Embed] });
});
