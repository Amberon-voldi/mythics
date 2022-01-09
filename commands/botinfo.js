const { MessageEmbed } = require('discord.js');
const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'botinfo',
  aliases: ['binfo'],
  usage: 'm!botinfo',
  async execute(bot, message, args) {
    const embed = new MessageEmbed();

		
		embed
			.setTitle("Mythics info")

			
			.setDescription(
				""
			)
			.setColor(0x333333)
			.setThumbnail(bot.user.avatarURL({ dynamic: true }))
			.setTimestamp()
			
			.addFields(
				{
					name: "**Bot Name**",
					value: bot.user.username,
					inline: true
				},
				{
					name: "Bot Version",
					value: "1.0.0",
					inline: true
				},
				
			)
			.addFields(
				{
					name: "Creation Date",
					value: "1/2/2022",
					inline: true
				},
				{
					name:"Made on",
					value: "Discord.js",
					inline: true
				},

				{
					name: "Bot's ID",
					value: bot.user.id,
					inline: true
				}
			)
			.addFields(
				{
					name: "Developer",
					value: "Amberon_voldimoth",
					inline: false
				},
				
			)
			;

		message.reply({ embeds: [embed] });
  },
};
