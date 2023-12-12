export async function faq(bot, chatID) {
    await bot.sendMessage(chatID, `Что вас больше всего интересует?`, {
        reply_markup: {
            inline_keyboard: [
                [{text: '🪩 Какие места самые популярные в Казани?', callback_data: 'popular-places'}],
                [{text: '💸 Какая средняя стоимость экскурсий в Казане в декабре?', callback_data: 'tour-prices'}],
                [{text: '🎁 Какие подарки можно привезти из Казани и где их купить?', callback_data: 'presents'}],
                [{text: '✌️ Будут ли нашим детям интересны экскурсии?', callback_data: 'for-kids'}],
                [{text: '🍕 Где можно вкусно перекусить или попробовать татарскую кухню?', callback_data: 'food'}],
                [{text: '⚙️ Можно ли перенести экскурсию на другую дату/другое время?', callback_data: 'change-date'}],
                [{text: '✍️ Как забронировать экскурсию?', callback_data: 'book'}],
                [{text: 'Вернуться к меню', callback_data: 'home'}]
            ]
        }
    });
}