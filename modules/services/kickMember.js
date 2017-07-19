'use strict'

const member = require('../utils/members')
const notify = require('../utils/notify')
const _members = member.members

const execute = (bot, msg) => {
  bot.getChatAdministrators(msg.chat.id).then(data => {
    let admins = data.some(admin => msg.from.id == admin.user.id)
    let target = msg.text.split(' ')[2].toLowerCase()
    if (admins) {
      target = _members.filter(member => target == member.name.toLowerCase())
      const reply = { 'reply_to_message_id': msg.message_id }
      bot.sendMessage(msg.chat.id, `Eu só lamento...`, reply).then(sended => {
        bot.kickChatMember(sended.chat.id, target[0].id).catch(err => {
          bot.sendMessage(msg.chat.id, 'OPS VOCE NAO PODE FAZER ISSO ENVIAREI O MOTIVO NO SEU PV ❌')
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

module.exports = { execute }