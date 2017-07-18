const members = require('./members')
const _members = members.members

const isAdmin = _members.filter(isAdmin => isAdmin.admin)

const notifyAdmin = (bot, msg) => {
  isAdmin.forEach(admin => {
    bot.sendMessage(admin.id, msg, { parse_mode: 'html' }).catch(console.log)
  })
}

module.exports = { notifyAdmin }