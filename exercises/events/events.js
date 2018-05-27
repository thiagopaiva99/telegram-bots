const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const user = getUser(ctx)

    ctx.reply(`Seja bem-vindo ${user.first_name}`)
})

const getUser = ctx => ctx.update.message.from

bot.startPolling()