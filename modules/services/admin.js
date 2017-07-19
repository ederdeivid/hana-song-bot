'use strict'
const member = require('../utils/members')
const notify = require('../utils/notify')
const _members = member.members

const execute = (bot, msg) => {
  bot.getChatAdministrators(msg.chat.id).then(data => {
    let admins = data.some(admin => msg.from.id == admin.user.id)
    if (admins) {
      let answers = [
        'Estou igual ao bumbum do Eder...🔥 ESTOU EM CHAMAS 🔥',
        'Pronta para conseguir uns abates... ☠☠🔫 ',
        'My Ultimate Is Charging',
        `Acho que voce ja deveria saber como estou ${msg.from.first_name}... 💔`,
      ]
      const reply = { 'reply_to_message_id': msg.message_id }
      bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).catch(console.log)
      notify.notifyAdmin(bot, msg, 'oie')
    } else {
      let answers = [
        'Eu nao posso atender seu pedido... ≧∇≦',
      ]
      const reply = { 'reply_to_message_id': msg.message_id }
      bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).then(sended => {
        bot.onReplyToMessage(sended.chat.id, sended.message_id, () => {
          let answers = [
            'AFK !!! ≧◡≦',
            'Não Vamos complicar as coisas, fique quieto !!!... (◣_◢) '
          ]
          const newReply = { 'reply_to_message_id': msg.message_id + 2 }
          bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], newReply)
        })
      }).catch(console.log)
    }
  }).catch(err => { console.log(err) })
}

const kickMember = (bot, msg) => {
  bot.getChatAdministrators(msg.chat.id).then(data => {
    let admins = data.some(admin => msg.from.id == admin.user.id)
    let target = (msg.text.split(' ')[2]).toLowerCase()
    if (admins) {
      target = _members.filter(member => target == member.name.toLowerCase())
      const reply = { 'reply_to_message_id': msg.message_id }
      bot.sendMessage(msg.chat.id, `ID: ${target[0].id}, Aguarde 🔄`, reply).then(sended => {
        bot.kickChatMember(sended.chat.id, target[0].id).catch(err => {
          bot.sendMessage(msg.chat.id, '❌ VOCE NAO PODE FAZER ISSO ❌')
          notify.notifyAdmin(bot, msg, `Tentativa de Kick a um ADM \n ERROR-Code: <b>${err.response.statusCode}</b> \n ERROR-Message: <b>${err.response.statusMessage}</b> \n <b>${err.response.body.description}</b> `)
        })
      }).catch(console.log)
    } else {
      let answers = [
        'Acho que voce não pode fazer isso...  ≧∇≦ ',
        'Voce é admin para me dar ordens ? .... ╭∩╮（︶︿︶）╭∩╮'
      ]
      const reply = { 'reply_to_message_id': msg.message_id }
      bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).then(sended => {
        bot.onReplyToMessage(sended.chat.id, sended.message_id, () => {
          let answers = [
            'AFK !!! ≧◡≦',
            'Seja bonzinho, e nao enche... （ミ￣ー￣ミ）'
          ]
          const newReply = { 'reply_to_message_id': msg.message_id + 2 }
          bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], newReply)
        })
      }).catch(console.log)
    }
  }).catch(err => {
    console.log(err)
  })
}

module.exports = { execute, kickMember }