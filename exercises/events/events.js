const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const utils = require('../utils.js')

bot.start(ctx => {
    const user = utils.getUser(ctx)

    ctx.reply(`Seja bem-vindo ${user.first_name}`)
})

bot.on('text', ctx => {
    ctx.reply(`Texto '${ctx.update.message.text}' recebido!`)
})

bot.on('location', ctx => {
    const { latitude, longitude } = ctx.update.message.location

    ctx.reply(`
        Opa! Entendi! Vocêe está em:
        Lat: ${latitude},
        Lon: ${longitude}
    `)
})

bot.startPolling()