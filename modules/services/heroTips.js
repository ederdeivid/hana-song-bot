'use strict'

const mercy = (bot, msg) => {
  let answers = [
    'Talvez isso possa lhe ajudar,'
    + 'http://www.metabomb.net/overwatch/hero-guides/overwatch-mercy-hero-guide-2 '
    + 'Quer saber a onde o seu boost faz mais efeito ? '
    + 'https://www.furiouspaul.com/overwatch/mercy.html',
    // 'Canais no YouTube ??'
    // + 'https://www.youtube.com/channel/UCZmz0RdI6LvX_rRmrlwx0Eg'
    // + 'You OverWatch'
    // + 'https://www.youtube.com/channel/UCEzOHrh9snmHJSGu9wmOvsw'
  ]
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
}

module.exports = {
  mercy
}