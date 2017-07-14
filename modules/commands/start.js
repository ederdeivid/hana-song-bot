'use strict'

const execute = (msg, match, bot) => {
  if (msg.chat.type === 'private') {
    let answers = `Oie que deseja fazer ${msg.from.first_name}`
    bot.sendMessage(msg.chat.id, answers, {
      reply_markup: {
        "keyboard": [["OW Tips & Tricks", "Ver Meu Desempenho"], ["Blizzard"], ["Pede pra Nerfar NOOB"]],
      }
    }).catch(console.log)
  } else {
    let answers = [
      'Vem no meu PV 😊, @Hana_Song_bot (づ｡◕‿‿◕｡)づ ',
      'OIE, @Hana_Song_bot te espero no pv  (─‿‿─)'
    ]
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
  }
}

module.exports = { execute }