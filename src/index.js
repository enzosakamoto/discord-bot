const { Client, IntentsBitField } = require('discord.js')
require('dotenv').config()

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

client.on('ready', (bot) => {
  console.log(`${bot.user.tag} is ready ✅`)
})

client.on('messageCreate', (message) => {
  if (message.author.id === client.user?.id) return

  if (message.content === 'ping') {
    message.reply('pong')
  }

  if (message.content === 'saka') {
    message.reply('o mais lindo do mundo')
  }

  if (
    message.content === 'naka' ||
    message.content === 'recruta' ||
    message.content === 'orto'
  ) {
    message.reply('maconha')
  }

  if (message.content === 'salve') {
    message.reply(`salve ${message.author.username}`)
  }
})

client.login(process.env.TOKEN)
