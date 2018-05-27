const env = require('../../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const utils = require('../utils.js')
const moment = require('moment')

bot.hears(/pizza/i, ctx => {
    const user = utils.getUser(ctx)

    ctx.reply(`${user.first_name}, você falou pizza? QUERO!`)
})

bot.startPolling()