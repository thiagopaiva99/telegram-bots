const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extre')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const utils = require('../utils.js')

let list = []

const buttons = () => Extra.markup(
    Markup.inlineKeyboard(
        list.map(item => Markup.callbackButton(item, `delete ${item}`)),
        {
            columns: 3
        }
    )
)