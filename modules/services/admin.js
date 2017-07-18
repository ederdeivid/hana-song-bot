'use strict'
const member = require('../utils/members')
const _members = member.members

const execute = (bot, msg) => {
  let id = msg.from.id
  let isAdmin = false
  _members.forEach((el, index) => {
    if (_members[index].id == id && _members[index].admin === true) { isAdmin = true }
  })
  if (isAdmin) {
    let answers = [
      'Estou igual ao bumbum do Eder...🔥 ESTOU EM CHAMAS 🔥',
      'Pronta para conseguir uns abates... ☠☠🔫 ',
      `Acho que voce ja deveria saber como estou ${msg.from.first_name}... 💔`,
      // 'Novo padrao de Reconhecimento de ADM Funcionando'
    ]
    const reply = { 'reply_to_message_id': msg.message_id }
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).catch(console.log)
  } else {
    let answers = [
      'Não to afim de te responder...',
      'Sua moral comigo ta baixa...',
      'Admin ?'
    ]
    const reply = { 'reply_to_message_id': msg.message_id }
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).catch(console.log)
  }
}

const kickMember = (bot, msg) => {
  let id = msg.from.id
  let isAdmin = false
  let target = (msg.text.split(' ')[2])
  _members.forEach((el, index) => {
    if (_members[index].id == id && _members[index].admin === true) { isAdmin = true }
  })
  if (isAdmin) {
    const reply = { 'reply_to_message_id': msg.message_id }
    bot.sendMessage(msg.chat.id, `Comando Reconhecido Alvo ${target}`, reply).catch(console.log)
  }
  /* let idAdmin = member.admins.id
  let nameAdmin = member.admins.name
  if (msg.from.id == idAdmin) {
    let answers = [
      'ID de Admin Reconhecido'
    ]
    const reply = { 'reply_to_message_id': msg.message_id }
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).catch(console.log)
  } else {
    let answers = [
      'Voce é Admin ?'
    ]
    const reply = { 'reply_to_message_id': msg.message_id }
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).catch(console.log)
  } */
}

module.exports = { execute, kickMember }