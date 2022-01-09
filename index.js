const { Client, Intents, Collection } = require('discord.js')

const config = require("./resources/config.json")
const fs = require('fs')

//const KeepAliveReplt = require('./resources/replt-ignore-server-file') //Remove if you are not using Uptime Robot for 24/7 for Replt Hosting

require('dotenv').config()

// comment the above line for replt.it Hosting

/*
 * (dotenv) will require ".env" file , So create .env file along side with index.js and package.json and place something like this in file :
 * TOKEN = "## Bot Token Here ##"
 * dprefix = "## Prefix here ##"
 */

/**
 * Or Un-Comment below line of this Commint and place "TOKEN" in ./resources/config.js
 * const { TOKEN , dprefix } = require('./resources/config.js);
 * And Remove the " const { TOKEN , dprefix } = process.env " and " require('dotenv').config() " to take Token from config file
 */

const { Player } = require('jericho-player')
// Discord Bot Token


// Making new Discord Client with Intents

/**
 * Note : "GUILD_MEMBERS" , "GUILD_PRESENCE" , "GUILD_MESSAGES" are Premium Intents , Give those intents if your Bot is in less than 74 Servers (<75) or having those Intents accepted in Developer Portal
 * Node (2) : "GUILD_VOICE_STATES" is importantly required for Playing Songs
 */

const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  

  ],
  restTimeOffset: 0,
  partials: ['CHANNEL', 'MESSAGE', 'REACTION'],
})

// Normal Bot's ready event once
bot.once('ready', () => {
  bot.user.setPresence({
    status: 'online',
    activities: [
      {
        name: ' ',
        type: 'WATCHING',
      },
    ],
  })
  console.info(`I am Ready and I will logged as - ${bot.user.tag} 🚧`)
})

// Creating a new Jericho Player Instance
bot.player = new Player(bot)

// Cache Files Info/Data in a Variable for Events
const playerEvents = fs
  .readdirSync('./events')
  .filter((file) => file.endsWith('.js'))

// Finding Eent File in ./event directory
for (const PlayerEventsFile of playerEvents) {
  const event = require(`./events/${PlayerEventsFile}`)
  bot.player.on(PlayerEventsFile.split('.')[0], event.bind(null, bot))
}
// Making a Collection [ Command ]
bot.commands = new Collection()
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith(''))

// Cache Command Files Data/Functions
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  bot.commands.set(command.name, command)
}

bot.on('messageCreate', async (message) => {
  // Filter Only Command Messages will be Passed through
  if (!message.content.trim().startsWith(config.prefix ?? 'm!')) return void null
  const args = message.content.slice(config.prefix.length).trim().split(/ +/)
  const commandName = args.shift().toLowerCase()
  const command =
    bot.commands.get(commandName) ||
    bot.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName))
  if (!command) return void null
  return void command.execute(bot, message, args)
})

//KeepAliveReplt() // Delete it if you don't wanna use Uptime Bot
// Or Remove dot.config thing and give manually Bot Token here like "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" and you can get one from Discord Developer Portal
bot.login(config.Token);
