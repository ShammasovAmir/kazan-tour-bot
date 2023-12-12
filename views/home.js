import {createReadStream} from "fs";

export async function home(msg, chatID, bot, isStart) {
    if (isStart) {
        const imageStream = createReadStream('./img/kazan-kremlin.png');
        await bot.sendPhoto(chatID, imageStream, {
            caption: 'Привет! Я чат-бот сервиса экскурсий! Рад видеть тебя!',
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Наши предложения', callback_data: 'services'}],
                    [{text: 'О сервисе', callback_data: 'about'}],
                    [{text: 'FAQ - Часто задаваемые вопросы', callback_data: 'faq'}]
                ]
            }
        });
    }
    else await bot.sendMessage(chatID, `О чём вы хотите узнать?`, {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Наши предложения', callback_data: 'services'}],
                [{text: 'О сервисе', callback_data: 'about'}],
                [{text: 'FAQ - Часто задаваемые вопросы', callback_data: 'faq'}]
            ]
        }
    });
}