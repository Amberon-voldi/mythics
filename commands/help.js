const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js')
const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils')

module.exports = {
	name: 'help',
	aliases: ['h', 'help'],
	usage: 'm!help',
	async execute(bot, message, args) {
		const homeembed = new MessageEmbed()
			.setTitle("__Help Command__")


			.setDescription(
				"Get a list of all available commands of Mythics bellow. select the command in intraction to read more."
			)
			.setColor(0x333333)
			.setAuthor({ name: "Mythics", iconURL: bot.user.avatarUrl })
			.setTimestamp()
			.addFields(
				{
					name: "> 📀 Misc Commands ",
					value: "  Get more out of commands, have some fun.",
					inline: true

				},
				{
					name: "> ⚙️ Utility Commands ",
					value: "  Make your server more interactive with these commands  ",
					inline: true

				},
				{
					name: "> 🎵 Music Commands ",
					value: "  Listen to music from spotify, youtube and more ",
					inline: true

				},
				{
					name:"> 🧿 Moderation",
					value:"Make your server safer for others",
					inline: true
				},
				{
					name: "> 🖥️  Mythics Corner  ",
					value: " Get details about our developers and other bots",
					inline: true

				}
			)
			.setFooter({ text: "Prefix - m!" })

			;
		const btnraw = new MessageActionRow().addComponents([
			new MessageButton().setCustomId("misc").setStyle("SECONDARY").setLabel("Misc").setEmoji('📀'),
			new MessageButton().setCustomId("utility").setStyle("SECONDARY").setLabel("Utility").setEmoji('⚙️'),
			new MessageButton().setCustomId("music").setStyle("SECONDARY").setLabel("Music").setEmoji('🎵'),
			new MessageButton().setCustomId("mod").setStyle("SECONDARY").setLabel("Mod").setEmoji('🧿'),
			new MessageButton().setCustomId("dev").setStyle("SECONDARY").setLabel("Mythics").setEmoji('🖥️'),
			



		]);
		const d_btnraw = new MessageActionRow().addComponents([
			new MessageButton().setCustomId("d_misc").setStyle("SECONDARY").setLabel("Misc").setDisabled(true),
			new MessageButton().setCustomId("d_utility").setStyle("SECONDARY").setLabel("Utility").setDisabled(true),
			new MessageButton().setCustomId("d_music").setStyle("SECONDARY").setLabel("Music").setDisabled(true),
			new MessageButton().setCustomId("d_dev").setStyle("SECONDARY").setLabel("Mythics").setDisabled(true),

		]);
		const h_btnraw = new MessageActionRow().addComponents([

			new MessageButton().setCustomId("home").setStyle("SECONDARY").setLabel("Home").setEmoji('🏠'),

		]);
		const bot_btnraw = new MessageActionRow().addComponents([


			new MessageButton().setCustomId("botinfo").setStyle("SECONDARY").setLabel("Bot Info").setEmoji('📁'),

			new MessageButton().setCustomId("cbots").setStyle("SECONDARY").setLabel("Bots").setEmoji('🔍'),
			new MessageButton().setCustomId("staff").setStyle("SECONDARY").setLabel("Staff").setEmoji('💰'),
			new MessageButton().setCustomId("home").setStyle("SECONDARY").setLabel("Home").setEmoji('🏠'),

		]);




		const miscraw = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Select a Command')
					.addOptions([
						{
							label: 'Avatar',
							description: 'Get pfps of other users',
							value: 'first_option',
						},
						{
							label: 'Flip',
							description: 'Flip a Coin',
							value: 'second_option',
						},
					]),
			);

		const miscembed = new MessageEmbed()
			.setTitle("📀 __Misc Commands__")
			.setDescription(
				"Get more out of commands, have some fun."
			)
			.setColor(0x333333)
			.setAuthor({ name: "Mythics", iconURL: bot.user.avatarUrl })
			.setTimestamp()
			.addFields({
				name:"User Command",
				value: `
				> **Avatar**
				view pfps by doing m!avatar <blank/mention>
				> **coinflip**
				Flip a coin by m!flip

				**Press 🏠 to get back.**


			
				
				`
			})
		


			.setTimestamp();

		const botinfoembed = new MessageEmbed()



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
					name: "Made on",
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


		const utilityembed = new MessageEmbed()
			.setTitle("⚙️ __Utility Commands__")
			.setDescription(
				"Make your server more interactive with these commands "
			)
			.setColor(0x333333)
			.setAuthor({ name: "Mythics", iconURL: bot.user.avatarUrl })
			.setTimestamp()
			

			.setFooter({ text: "Prefix - m!" });

		const devembed = new MessageEmbed()
			.setTitle("🖥️ __Mythics Corner__")
			.setDescription(
				"Get more out of commands, have some fun."
			)
			.setColor(0x333333)
			.setAuthor({ name: "Mythics", iconURL: bot.user.avatarUrl })
			.setTimestamp()
			.addFields({
				name: "> 📁 Botinfo ",
				value: "Get details for mythics bot"
			},

				{
					name: "> 🔍 Community bots ",
					value: "Get a list of Mythics affiliated  bots "
				},
				{
					name: "> 💰 Staff/Developers",
					value: "only assessable to Developers and Staffs\n    **Press 🏠 to get back.**"
				},
				
			)

			.setFooter({ text: "Prefix - m!" });

		const musicembed = new MessageEmbed()
			.setTitle("🎵 __Music Commands__")
			.setDescription(
				"Listen to music from spotify, youtube and more."
			)
			.setColor(0x333333)
			.setAuthor({ name: "Mythics", iconURL: bot.user.avatarUrl })
			.setTimestamp()
			.addFields(
				{
					name: "User Commands",
					value: `
					> **Play Song** : m!play <next/Blank> <Song-name>
					> **Skip Song** : m!skip <Blank/Track-Number> <Blank/Force>
					> **Stop Song** : *m!stop <Blank/Force>
					> **Pause Music Plyer** : m!pause
					> **Resume Music Player** : m!resume
					> **Repeat/Non-Repeat Mode** : m!loop
					> **Autoplay** : m!autoplay
					> **Queue** : m!queue
					> **Repeat/Non-Repeat [ Queue ]** : m!loop queue
					> **Clear Queue** : m!clearqueue
					> **Shuffle Songs** : m!shuffle
					> **Config Volume** : m!volume <1 - 100>
					> **Current Song** : m!current
					> **Set Position** : m!position <hh:mm:ss>
					> **Previous Song** : m!back
					> **Remove Song** : m!remove <Song Number>
					> **Filters** : m!filter <list/filter-name>
					> **Search Engine** : m!search <Song-Name>
					
					**Press 🏠 to get back.**`



				},


			)

			.setFooter({ text: "Prefix - m!" });








		await message.reply({ embeds: [homeembed], components: [btnraw] }).then(async (msg) => {
			const filter = i => i.user.id === message.author.id;
			const collector = await msg.createMessageComponentCollector({
				filter: filter,
				title: 1000 * 60,

			});
			collector.on('collect', async (btn) => {
				if (btn.isButton()) {
					if (btn.customId === "misc") {
						await btn.deferUpdate().catch(e => { })
						msg.edit({ embeds: [miscembed], components: [h_btnraw] })
					} else if (btn.customId === "utility") {
						await btn.deferUpdate().catch(e => { })
						msg.edit({ embeds: [utilityembed], components: [h_btnraw] })
					} else if (btn.customId === "dev") {
						await btn.deferUpdate().catch(e => { })
						msg.edit({ embeds: [devembed], components: [bot_btnraw] })
					} else if (btn.customId === "music") {
						await btn.deferUpdate().catch(e => { })
						msg.edit({ embeds: [musicembed], components: [h_btnraw] })
					} else if (btn.customId === "home") {
						await btn.deferUpdate().catch(e => { })
						msg.edit({ embeds: [homeembed], components: [btnraw] })
					} else if (btn.customId === "botinfo") {
						await btn.deferUpdate().catch(e => { })
						msg.edit({ embeds: [botinfoembed], components: [h_btnraw] })
					}
				}
			})
			collector.on('end', () => {
				msg.edit({ embeds: [homeembed], components: [d_btnraw] })
			})
		})



	},
};
