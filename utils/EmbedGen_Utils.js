const { MessageEmbed } = require('discord.js')

async function ErrorEmbedGen(bot, CacheData, message) {
  const ErrorEmbedValue = new MessageEmbed().setAuthor(bot.user.username)
  CacheData.title ? ErrorEmbedValue.setTitle(`${CacheData.title}`) : undefined
  CacheData.description
    ? ErrorEmbedValue.setDescription(`${CacheData.description}`)
    : undefined
  ErrorEmbedValue.setFooter('Error has been Occoured!!')
  ErrorEmbedValue.setColor(0x333333)
  CacheData.image ? ErrorEmbedValue.setImage(`${CacheData.image}`) : undefined
  CacheData.thumbnail
    ? ErrorEmbedValue.setThumbnail(`${CacheData.thumbnail}`)
    : undefined
  return void (await message.channel
    .send({ embeds: [ErrorEmbedValue] })
    .catch(
      (error) =>
        void message.author.send(
          '__**Missing Permissions in Server or Channel**__\n*Check for Channel Permissions for Manage Message and Send Messages*',
        ),
    ))
}

async function ReturnEmbedGen(bot, CacheData, message) {
  const ErrorEmbedValue = new MessageEmbed().setAuthor(bot.user.username)
  CacheData.title ? ErrorEmbedValue.setTitle(`${CacheData.title}`) : undefined
  CacheData.description
    ? ErrorEmbedValue.setDescription(`${CacheData.description}`)
    : undefined
  ErrorEmbedValue.setFooter('Operation is Successfull!!')
  ErrorEmbedValue.setColor(0x333333)
  CacheData.image ? ErrorEmbedValue.setImage(`${CacheData.image}`) : undefined
  CacheData.thumbnail
    ? ErrorEmbedValue.setThumbnail(`${CacheData.thumbnail}`)
    : undefined
  CacheData.field
    ? ErrorEmbedValue.addField(CacheData.field.title, CacheData.field.value, false)
    : undefined
  return void (await message.channel
    .send({ embeds: [ErrorEmbedValue] })
    .catch(
      (error) =>
        void message.author.send(
          '__**Missing Permissions in Server or Channel**__\n*Check for Channel Permissions for Manage Message and Send Messages*',
        ),
    ))
}

module.exports = { ErrorEmbedGen, ReturnEmbedGen }
