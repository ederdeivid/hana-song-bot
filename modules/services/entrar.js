'use strict'

const answers = [
  'Mais um pra ajudar a não chega no 💎 ... não pera... (¬‿¬) ',
  'É esse ai que ta ouro desdo inicio da temporada ??? ( ͡ᵔ ͜ʖ ͡ᵔ )',
  'Achei que de Noob ja bastava os que tinha aqui 😆 '
]

const execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
}

module.exports = { execute }