'use strict'

const tips = require('../utils/linkTips')
const _tips = tips.tricks

const execute = (bot, msg, match, nameTip) => {
  _tips.forEach((el, index) => {
    if (_tips[index][nameTip]) {
      let answers = (_tips[index][nameTip])
      bot.sendMessage(msg.chat.id, answers).catch(console.log)
    }
  })
}

module.exports = {
  execute
}