const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const user = getUser(ctx)

    const response = checkUser(user)

    ctx.reply(response)
})

const getUser = ctx => ctx.update.message.from

const checkUser = user => 
    user.id == env.userId
        ? "Bem vindo, mestre!"
        : "Desculpa, só respondo ao meu mestre!"


bot.startPolling()