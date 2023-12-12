import {createReadStream} from "fs";

export async function artGallery(bot, chatID) {
    const imageStream = createReadStream('./img/art-gallery.jpg');
    await bot.sendPhoto(chatID, imageStream, {
        caption: 'Галерея современного искусства РТ является одним из центров художественной жизни Казани. Она размещается в здании, построенном в 1979 году как Выставочный зал Союза художников Татарской АССР. Сложное в планировке и композиции сооружение, в основе стиля которого лежит идея динамичного развития формы, выделяется своим объемом и в то же время органично вписывается в окружение.',
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: [
                [{text: '🔗 Забронировать экскурсию', callback_data: 'tour'}],
                [{text: 'Вернуться к предложениям', callback_data: 'services'}],
                [{text: 'Вернуться к меню', callback_data: 'home'}]
            ]
        }
    });
}