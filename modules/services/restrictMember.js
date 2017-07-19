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
      let answers = [
        ' A função de Restrict Members esta em desenvolvimento pelo \n'
        + 'YAGOP, e nao esta presente na versao release que esta sendo usado '
        + 'atualmente por mim. \n'
        + 'GitHub: https://github.com/yagop/node-telegram-bot-api/blob/release/doc/api.md'
      ]
      bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)] , reply).then(sended => {
        /* `ID: ${target[0].id}, Aguarde 🔄`
        bot.restrictChatMember(sended.chat.id, target[0].id).then(data => {
          console.log(data)
        }).catch(err => { 
          console.log(err)
        }) */
      }).catch(console.log)
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

module.exports = { execute }