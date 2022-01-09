const { VoiceUtils } = require('jericho-player');
const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'connect',
  aliases: ['co', 'con', 'conn'],
  usage: 'ft?connect VoiceChannel.id',
  async execute(bot, message, args) {
    let VoiceChannel = await message.guild.channels
      .fetch(args[0])
      .catch((error) => void null);
    VoiceChannel = VoiceChannel && VoiceChannel.type.includes('VOICE')
      ? VoiceChannel
      : undefined;
    if (
      (args[0] && !VoiceChannel)
      || !(!args[0] && message.member.voice && message.member.voice.channel)
    ) {
      const ErrorEmbed = {
        title: 'Invalid Voice Channel',
        description: 'No Voice Channel has been found on Given Conditions',
      };
      return void (await ErrorEmbedGen(bot, ErrorEmbed, message));
    }
    VoiceChannel = VoiceChannel ?? message.member.voice.channel;

    await VoiceUtils.join(bot, VoiceChannel, {
      force: true,
    });
    const ReturnEmbed = {
      title: 'Joined Voice Channel',
      description: `**Voice Channel -** <#${VoiceChannel.id}>`,
    };
    return void (await ReturnEmbedGen(bot, ReturnEmbed, message));
  },
};
