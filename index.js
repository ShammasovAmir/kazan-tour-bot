import TelegramBot from 'node-telegram-bot-api';
import "dotenv/config.js";
import {initRouter} from "./router.js";
import {home} from "./views/home.js";

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async msg => {
    if (msg.text.startsWith('/start')) {
        await home(msg, msg.chat.id, bot, true);
    }
});

bot.on('callback_query', async msg => {
    await initRouter(bot, msg);
});