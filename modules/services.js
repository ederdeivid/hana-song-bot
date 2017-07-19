const sair = require('./services/sair')
const entrar = require('./services/entrar')
const elogios = require('./services/elogios')
const ofensa = require('./services/ofensa')
const kickMember = require('./services/kickMember')
const stickerElogios = require('./services/stickerElogios')
const heroTips = require('./services/heroTips')
const heroSelect = require('./services/heroSelect')
const stickerOfensa = require('./services/stickerOfensa')
const stickerDespedida = require('./services/stickerDespedida')
const restrictMember = require('./services/restrictMember')

const ofensasRegExp = require('./RegExp/ofensasRegExp')
const elogiosRegExp = require('./RegExp/elogiosRegExp')
const despedidaRegExp = require('./RegExp/despedidaRegExp')

const defs = [
  {
    member: 'elogios',
    regex: new RegExp(`(bot|hana|song|dva|d.va).*${elogiosRegExp.elogios}`, 'i'),
    fn: (bot, msg, match) => elogios.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'ofensa',
    regex: new RegExp(`(bot|hana|song|dva|d.va).*${ofensasRegExp.ofensas}`, 'i'),
    fn: (bot, msg, match) => ofensa.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'kickMember',
    regex: /(hana|dva|d.va).*(kick)/i,
    fn: (bot, msg, match) => kickMember.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'stickerElogios',
    regex: /❤|❤️|<3|S2/i,
    fn: (bot, msg, match) => stickerElogios.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'heroSelect',
    regex: /OW Dicas e Guias/i,
    fn: (bot, msg, match) => heroSelect.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'heroTips',
    regex: /(tips)/i,
    fn: (bot, msg, match, nameTip) => heroTips.execute(bot, msg, match ? match : [], nameTip),
    eval: false
  },
  {
    member: 'stickerOfensa',
    regex: new RegExp(`${ofensasRegExp.ofensasSticker}`,'i'),
    fn: (bot, msg, match) => stickerOfensa.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'stickerOfensa',
    regex: new RegExp(`(essa|est(á|a)|ela).*${ofensasRegExp.ofensasSticker2}`,'i'),
    fn: (bot, msg, match) => stickerOfensa.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'stickerDespedida',
    regex: new RegExp(`${despedidaRegExp.despedida}`, 'i'),
    fn: (bot, msg, match) => stickerDespedida.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'restrictMember',
    regex: /(hana|dva|d.va).*(restrinja|limite)/i,
    fn: (bot, msg, match) => restrictMember.execute(bot, msg, match ? match : []),
    eval: false
  },
]
// console.log(defs)
module.exports = {
  defs,
  sair,
  entrar,
  elogios,
  ofensa,
  kickMember,
  stickerElogios,
  heroSelect,
  heroTips,
  stickerOfensa,
  stickerDespedida,
  restrictMember
}