const sair = require('./services/sair')
const entrar = require('./services/entrar')
const elogios = require('./services/elogios')

const defs = [
  {
    member: 'elogios',
    regex: /bot|hana|Hana|d.va|dva|DVA|D.VA.*(foda|bonita|z(u|o)(e|ei)ra|legal|fofa||linda|chique|interessante|bacana|fera|boa|estraordin(á|a)ria|excelente|bolada|melhor|a melhor|fod(õ|o)na|best)/i,
    fn: (bot, msg, match) => elogios.execute(bot, msg, match ? match : []),
    eval: false
  }
]

module.exports = {
  defs,
  sair,
  entrar,
  elogios,
}