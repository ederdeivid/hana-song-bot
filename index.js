const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '355435781:AAFj1u4K4GPJkmzfcZ0u_AH6GCA-pKxJfEo'
const commands = require('./modules/commands')
const services = require('./modules/services')
const _services = services.defs



const bot = new TelegramBot(TOKEN, { polling: true })

bot.onText(/^\/([a-zA-Z]+) ?([^@]+)?(@.*bot)?/i, (msg, match) => {
  let command = match[1]
  if (command in commands) {
    command = commands[command]
    command.execute(msg, match, bot)
  } else {
    bot.sendMessage(msg.chat.id, 'Desculpe, o que disse ? Tente novamente.')
  }
})

bot.onText(/^([^\/]+)/i, (msg, match) => {
  _services.forEach((element, index) => {
    if (_services[index].regex.test(msg.text)) {
      _services[index].fn(bot, msg, match)
    }
  })
})

bot.on('callback_query', callback => {
  let match = callback.data.split('|')[0]
  let msg = callback.message
  let nameTip = callback.data.split('|')[1]
  _services.forEach((element, index) => {
    if (_services[index].regex.test(match)) {
      _services[index].fn(bot, msg, match, nameTip)
    }
  })

})

bot.on('message', (msg) => {
  console.log(msg)
  if (msg.sticker) {
    let match = msg.sticker.emoji
    _services.forEach((element, index) => {
      if (_services[index].regex.test(match)) {
        _services[index].fn(bot, msg, match)
      }
    })
  }
});

bot.on("left_chat_participant", msg => {
  services.sair.execute(bot, msg)
})

bot.on("new_chat_participant", msg => {
  services.entrar.execute(bot, msg)
  
})