const env = require('../../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const utils = require('../utils.js')

const MeatKeyboard = Markup.keyboard([
    ['🐷 Porco', '🐄 Vaca', '🐏 Carneiro'],
    ['🐔 Galinha', '🥚 Ovo'],
    ['🍄 Vegetariano']
]).resize().extra()

bot.start(async ctx => {
    const user = utils.getUser(ctx)

    await ctx.reply(`Seja bem vindo, ${user.first_name}`)
    await ctx.reply(`Qual guarana tu prefere?`,
        Markup.keyboard(['Fruki', 'Kuat']).resize().oneTime().extra())
})

bot.hears([/fruki/i, /kuat/i], async ctx => {
    await ctx.reply(`Opa! Eu também gosto de ${ctx.match}`)
    await ctx.reply(`E carne, qual tu prefere??`, MeatKeyboard)
})

bot.startPolling()

