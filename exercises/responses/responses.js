const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const utils = require('../utils.js')

bot.start(async ctx => {
    const user = utils.getUser(ctx)
    await ctx.reply(`Seja bem vindo ${user.first_name}!`)
})

bot.startPolling()