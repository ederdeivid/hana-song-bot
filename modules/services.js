const sair = require('./services/sair')
const entrar = require('./services/entrar')
const elogios = require('./services/elogios')
const rage = require('./services/rage')
const eduwl = require('./services/eduwl')

const defs = [
  {
    member: 'elogios',
    regex: /(bot|hana|song|dva|d.va).*(foda|bonita|z(u|o)(e|ei)ra|legal|fofa|linda|chique|interessante|bacana|fera|boa|estraordin(á|a)ria|excelente|bolada|melhor|a melhor|fod(õ|o)na|best)/i,
    fn: (bot, msg, match) => elogios.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'rage',
    regex: /(bot|hana|song|dva|d.va).*(lixo|retarda|noob|nob|inutil|demente|fdp|fdm|reatard(a|o)|d(u|o)en(te|ça)|i(z|zz)i|ez|put(a|o)|vagabund(a|o))/i,
    fn: (bot, msg, match) => rage.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'eduwl',
    regex: /hana.*(como voce esta|status)/i,
    fn: (bot, msg, match) => eduwl.execute(bot, msg, match ? match : []),
    eval: false
  }
]

module.exports = {
  defs,
  sair,
  entrar,
  elogios,
  rage,
  eduwl
}