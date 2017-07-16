'use strict'
const startButtons = require('../utils/startButton')
const _startButtons = startButtons.buttons

const execute = (msg, match, bot) => {
  if (msg.chat.type === 'private') {
    let opts = createKeyboard(_startButtons)
    let answers = `Oie que deseja fazer ${msg.from.first_name}`
    bot.sendMessage(msg.chat.id, answers, opts).catch(console.log)
  } else {
    let answers = [
      'Vem no meu PV 😊, @Hana_Song_bot (づ｡◕‿‿◕｡)づ ',
      'OIE, @Hana_Song_bot te espero no pv  (─‿‿─)'
    ]
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
  }
}

const createKeyboard = (_startButtons) => {
  return {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      selective: true,
      keyboard: _startButtons
    }
  }
}

module.exports = { execute }