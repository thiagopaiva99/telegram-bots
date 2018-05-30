const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const utils = require('../../exercises/utils')

const buttons = () => Extra.markup(
    Markup.inlineKeyboard(
        list.map(item => Markup.callbackButton(item, `delete ${item}`)),
        {
            columns: 3
        }
    )
)

bot.use(session())

bot.start(async ctx => {
    const user = utils.getUser(ctx)

    await ctx.reply(`Seja bem-vindo ${user.first_name}`)
    await ctx.reply(`Digite os itens que você deseja adicionar...`)
    
    ctx.session.list = []
})

bot.on('text', ctx => {
    const item = ctx.update.message.text

    ctx.session.list.push(item)
    ctx.reply(`${item} adicionado!`, buttons())
})

bot.action(/delete (.+)/, ctx => {
    const item = ctx.match[1]

    ctx.session.list = ctx.session.list.filter(listItem => listItem !== item)
    ctx.reply(`${item} deletado!`, buttons())
})

bot.startPolling()