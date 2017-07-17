'use strict'

const stickers = [
  'CAADAQAD3AADbePnCE_K-heV6MoKAg',
  'CAADAQADrgADbePnCIv8IquNQRRxAg',
  'CAADAQAD6QADbePnCHTSwDcsO3qUAg',
  'CAADAQADwAADbePnCGMR1RXHiyyGAg',
  'CAADAQADTAYAAkEGgg6zmJ4_yLAVYgI'
]

const execute = (bot, msg) => {
  const reply = { 'reply_to_message_id': msg.message_id }
  bot.sendSticker(msg.chat.id, stickers[Math.floor(Math.random() * stickers.length)], reply).catch(console.log)
}

module.exports = { execute }