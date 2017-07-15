'use strict'
const heros = require('../utils/heros')
const _heros = heros.heros

const execute = (bot, msg) => {
  let opts = createKeyboard(_heros)
  bot.sendMessage(msg.chat.id, 'Selecione o seu Heroi !!!', opts).catch(console.log)
}

const createKeyboard = (_heros) => {
  return {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      selective: true,
      inline_keyboard: _heros
    }
  }

}

module.exports = { execute }