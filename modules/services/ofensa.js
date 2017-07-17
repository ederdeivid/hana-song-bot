'use strict'

const answers = [
  'Vai me pedir escudo quando a Phara Ultar... ಠ╭╮ಠ',
  'Olha só quem esta falando... ಠ_ಠ',
  'Eu tambem te amo 💖 ... Só que não.. ¬_¬',
  'Devo te levar a serio mesmo ??? Xingando um humilde bot como eu.. 😘 .. ◔ ⌣ ◔',
  'Se voce quer um autografo é só me pedir.... ASS: Com Amor DVA 💋.... ✍',
  'Eu não vo pedir desculpas... ¬_¬',
]

const execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)])
}

module.exports = { execute }