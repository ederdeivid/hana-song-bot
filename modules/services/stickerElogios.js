'use strict'

const stickers = [
  'CAADAQADygADbePnCCyYVl3mtxCTAg',
  // 'CAADAQAD1AADbePnCOZTINRwpgznAg',
  // 'CAADAQAD7AADbePnCLVtX_9hq4h3Ag',
  // 'CAADAQAD8AADbePnCONCyapdxSw4Ag',
  // 'CAADAQADzwADbePnCHq9YybUUGY4Ag',
  // 'CAADAQAD1QADbePnCIvgZzTiFutrAg',
  // 'CAADAQADngADbePnCLxNjviX5a8vAg'
]

const execute = (bot, msg) => {
  const reply = { 'reply_to_message_id': msg.message_id }
  bot.sendSticker(msg.chat.id, stickers[Math.floor(Math.random() * stickers.length)], reply).catch(console.log)
}

module.exports = { execute }