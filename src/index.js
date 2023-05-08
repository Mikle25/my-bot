import { Telegraf } from 'telegraf'
import * as dotenv from 'dotenv'

dotenv.config()

const bot = new Telegraf(process.env.TOKEN)

bot.command('start', (ctx) => {
  ctx.reply(`Привет ${ctx.message.from.first_name}!`)
  ctx.reply(`Чем могу быть полезен?`)
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
