const { MessageEmbed } = require('discord.js');

module.exports = ('error',
(bot, message, queue, data) => {
  if (queue && queue.metadata.message) {
    const Embed = new MessageEmbed()
      .setTitle('Music Player')
      .setDescription(
        `Error is caused by - \`${message}\`${
          data ? `| Where your data was -> \`${data}\`` : ''
        }`,
      )
      .setColor(0x333333);
    return void queue.metadata.message.channel.send({ embeds: [Embed] });
  }
  return void console.log(message);
});
