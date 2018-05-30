const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const utils = require('../../exercises/utils')

let list = []

const buttons = () => Extra.markup(
    Markup.inlineKeyboard(
        list.map(item => Markup.callbackButton(item, `delete ${item}`)),
        {
            columns: 3
        }
    )
)

const checkUser = (ctx, next) => {
    const sameIdMsg = ctx.update.message 
        && ctx.update.message.from.id === env.userId

    const sameIdCallback = ctx.update.callback_query 
        && ctx.update.callback_query.from.id === env.userId

    sameIdMsg || sameIdCallback 
        ? next()
        : ctx.reply('Desculpe, não fui autorizado a conversar com você!')
}

const processing = ({ reply }, next) => {
    reply('Processando...')
        .then(() => next())
}

bot.start(checkUser, async ctx => {
    const user = utils.getUser(ctx)

    await ctx.reply(`Seja bem-vindo ${user.first_name}`)
    await ctx.reply(`Digite os itens que você deseja adicionar...`)
})

bot.on('text', checkUser, processing, ctx => {
    const item = ctx.update.message.text

    list.push(item)
    ctx.reply(`${item} adicionado!`, buttons())
})

bot.action(/delete (.+)/, ctx => {
    const item = ctx.match[1]

    list = list.filter(listItem => listItem !== item)
    ctx.reply(`${item} deletado!`, buttons())
})

bot.startPolling()