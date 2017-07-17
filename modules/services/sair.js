'use strict'

const answers = [
  'Kick eu não todos amam a D.va...| (• ◡•)|',
  'Mais um pra ser abatido in-game... (｡◕‿‿◕｡)',
  'Menos um pra eu defender com minha matriz...ಠ‿↼',
  '¯\\_(ツ)_/¯'
]

const execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
}

module.exports = { execute }