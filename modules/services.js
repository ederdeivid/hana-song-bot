const sair = require('./services/sair')
const entrar = require('./services/entrar')
const elogios = require('./services/elogios')
const rage = require('./services/rage')
const eduwl = require('./services/eduwl')
const stickerFeliz = require('./services/stickerFeliz')
const heroTips = require('./services/heroTips')
const hanaOptions = require('./services/hanaOptions')

const defs = [
  {
    member: 'elogios',
    regex: /(bot|hana|song|dva|d.va).*(foda|bonita|z(u|o)(e|ei)ra|legal|fofa|f(a|ã)|linda|chique|interessante|bacana|fera|boa|estraordin(á|a)ria|excelente|bolada|melhor|a melhor|fod(õ|o)na|best|top|topzera)/i,
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
  },
  {
    member: 'stickerFeliz',
    regex: /❤️|<3|S2(?:[^\d]+|$)/i,
    fn: (bot, msg, match) => stickerFeliz.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'hanaOptions',
    regex: /OW Dicas e Guias/i,
    fn: (bot, msg, match) => hanaOptions.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'heroTips',
    regex: /(tips)/i,
    fn: (bot, msg, match, nameTip) => heroTips.execute(bot, msg, match ? match : [], nameTip),
    eval: false
  },
]

module.exports = {
  defs,
  sair,
  entrar,
  elogios,
  rage,
  eduwl,
  stickerFeliz,
  hanaOptions,
  heroTips
}