import TelegramBot from 'node-telegram-bot-api';
import "dotenv/config.js";
import Koa from 'koa';
import {initMessageRouter} from "./messageRouter.js";
import {home} from "./views/home.js";
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const token = process.env.TELEGRAM_BOT_TOKEN;

if (process.env.NODE_ENV === "production") {
    const bot = new TelegramBot(token);
    bot.setWebHook(`${process.env.CYCLIC_URL}/bot`);

    const app = new Koa();

    const router = Router();
    router.post('/bot', ctx => {
        const {body} = ctx.request;
        bot.processUpdate(body);
        ctx.status = 200;
        start(bot);
    });

    app.use(bodyParser());
    app.use(router.routes());

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
    })
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
