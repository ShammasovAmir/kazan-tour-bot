export async function services(bot, chatID) {
    await bot.sendMessage(chatID, `Что вас больше всего интересует?`, {
        reply_markup: {
            inline_keyboard: [
                [{text: '🌲 Природа', callback_data: 'nature'}],
                [{text: '📚 История', callback_data: 'history'}],
                [{text: '🎭 Искусство', callback_data: 'art'}],
                [{text: '🥘 Гастрономия', callback_data: 'gastronomy'}],
                [{text: 'Вернуться к меню', callback_data: 'home'}]
            ]
        }
    });
}