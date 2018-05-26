const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from

    console.log(from)
    ctx.reply(`Fala ae ${from.first_name}`)
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Mid 1')
    next()
})

bot.startPolling()