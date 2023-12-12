import TelegramBot from 'node-telegram-bot-api';
import "dotenv/config.js";
import {initMessageRouter} from "./messageRouter.js";
import {home} from "./views/home.js";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (process.env.NODE_ENV === "production") {
    const bot = new TelegramBot(token, {
        webHook: {
            port: process.env.PORT || 3000,
            autoOpen: false
        }
    });

    bot.openWebHook();
    bot.setWebHook(`${process.env.CYCLIC_URL}/bot${process.env.TELEGRAM_BOT_TOKEN}`);
    start(bot);
} else {
    const bot = new TelegramBot(token, { polling: true });
    start(bot);
}

function start(bot) {
    bot.on('message', async msg => {
        if (msg.text.startsWith('/start')) {
            await home(msg, msg.chat.id, bot, true);
        }
    });

    bot.on('callback_query', async msg => {
        await initMessageRouter(bot, msg);
    });
}
