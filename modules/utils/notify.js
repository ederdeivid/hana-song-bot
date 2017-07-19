const members = require('./members')
const _members = members.members

const notifyAdmin = (bot, msg, text) => {
  bot.getChatAdministrators(msg.chat.id).then(data => {
    let admin = data.filter(admin => admin.user.id == msg.from.id)
    bot.sendMessage(admin[0].user.id, text, { parse_mode: 'html' }).catch(console.log)
  }).catch(err => {
    console.log(err)
  })
}

module.exports = { notifyAdmin }