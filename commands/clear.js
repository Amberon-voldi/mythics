const { MessageEmbed } = require('discord.js');
const { ErrorEmbedGen, ReturnEmbedGen } = require('../utils/EmbedGen_Utils');

module.exports = {
  name: 'clear',
  aliases: ['wipe','purge'],
  usage: 'm!ping',
  async execute(bot, message, args) {
    try {
        const amount = args[1];

        const embeddone = new MessageEmbed();
        embeddone
        .setDescription(`${
        amount == undefined ? "That's" : amount
    } is not a valid number!`);

    if (!amount || isNaN(amount))
        return message.reply(
            {embeds: [embeddone]}
            
        );

    const amountParsed = parseInt(amount);

    const embed1 = new MessageEmbed();
    embed1
    .setDescription("You cannot clear more than 100 messages!");

    if (amountParsed > 100)
        return message.reply({embeds:[embed1]});

    message.channel.bulkDelete(amountParsed);
    const embed2 = new MessageEmbed();
    embed2
    .setDescription(`Cleared ${amountParsed} messages!`);

    const msg = await message.reply(
        {embeds:[embed2]}
    );



    

    if (msg) setTimeout(() => msg.delete(), 3000);
        
    } catch (error) {
        console.log(error)

  
    const errorembed = new MessageEmbed();
    errorembed
     .setTitle("Error!")
     .setDescription(`${error}`)
     .setTimestamp();
    message.reply({ embeds: [embed] });
        
    }
  },
};
