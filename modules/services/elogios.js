'use strict'

const answers = [
  'Obrigada Pelo Carinho 😊',
  'Um beijo pros fans 😘',
  'Com amor D.VA 😍',
  'Minha Matriz Defensiva vai estar em voce ... (づ｡◕‿‿◕｡)づ ',
  'Ta querendo um escudinho na ult da Phara que eu sei. (づ￣ ³￣)づ',
]

const stickers = [
  'CAADAgAD0AcAAgi3GQJLWl40zk4kFQI',
  'CAADBQADOgADGww5ELrNtnMm4LNmAg',
  'CAADBQADIwEAAhsMORDGlEek-WYgzAI',
  'CAADBQADogADGww5EJOKWRsFywhTAg',
  'CAADBQADvgADGww5ENLO0omCV2yGAg',
  'CAADBQADOAADGww5EO9SGVeAFtAJAg',
  'CAADBAADbwkAAt5A-AeilE0MPUkoGgI'
]

const execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
  bot.sendSticker(msg.chat.id, stickers[Math.floor(Math.random() * stickers.length)]).catch(console.log)
}

module.exports = { execute }