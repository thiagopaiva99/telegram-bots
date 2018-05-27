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

bot.on('contact', ctx => {
    const contact = ctx.update.message.contact
    console.log(contact)
    ctx.reply(`Feito! Recebi o contato '${contact.first_name}'`)
})

bot.on('voice', ctx => {
    const voice = ctx.update.message.voice
    console.log(voice)
    ctx.reply(`Audio recebido, ele possui ${voice.duration} segundos`)
})

bot.on('photo', ctx => {
    const photos = ctx.update.message.photo
    console.log(photos)
    
    photos.forEach((photo, index) => 
        ctx.reply(`Photo ${index} tem resolução de ${photo.width}x${photo.height}`)
    )
})

bot.startPolling()