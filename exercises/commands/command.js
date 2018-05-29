const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const utils = require('../utils.js')

bot.start(ctx => {
    const user = utils.getUser(ctx)

    ctx.reply(`Seja bem vindo ${user.first_name}, avise se precisar de /ajuda`)
})

bot.command('ajuda', ctx => {
    ctx.reply(`Eu sou o comando de ajuda!`)
})

bot.startPolling()