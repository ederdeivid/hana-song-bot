'use strict'

const stickers = [
  'CAADAQAD8QADbePnCHB0Rlazl7vZAg',
  'CAADAQADCwEAAm3j5winYzo04LxTfAI',
  'CAADAQADCAEAAm3j5whAyH04uAauCwI',
  'CAADAQAD2AADbePnCPcyZOs1meEbAg',
  'CAADAQADxAADbePnCOOYSYG8giCWAg'
]

const execute = (bot, msg) => {
  const reply = { 'reply_to_message_id': msg.message_id }
  bot.sendSticker(msg.chat.id, stickers[Math.floor(Math.random() * stickers.length)], reply).catch(console.log)
}

module.exports = { execute }