'use strict'
const member = require('../utils/admin')

const execute = (bot, msg) => {
  let idAdmin = member.admins.id
  let nameAdmin = member.admins.name
  console.log(msg.chat.id, idAdmin)
  if (msg.chat.id == idAdmin) {
    let answers = [
      'Estou igual ao bumbum do Eder...🔥 ESTOU EM CHAMAS 🔥',
      'Pronta para conseguir uns abates... ☠☠🔫 ',
      `Acho que voce ja deveria saber como estou ${nameAdmin}.... 💔`
    ]
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
  } else {
    let answers = [
      'Olhei aqui, e voce nem tem simbolo de diamante.... fala com a mao... 🤚',
      'Não to afim de te responder...',
      'Sua moral comigo ta baixa...'
    ]
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
  }
}

module.exports = { execute }