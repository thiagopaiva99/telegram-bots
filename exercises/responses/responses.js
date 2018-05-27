const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const utils = require('../utils.js')

bot.start(async ctx => {
    const user = utils.getUser(ctx)
    await ctx.reply(`Seja bem vindo ${user.first_name}!`)
    await ctx.replyWithHTML(`Resposta com <i>HTML</i>`)
    await ctx.replyWithMarkdown(`Resposta com *Markdown*`)
})

bot.startPolling()