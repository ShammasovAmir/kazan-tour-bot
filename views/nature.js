export async function nature(bot, chatID) {
    await bot.sendMessage(chatID, `В следующих местах вы можете насладиться природой.`, {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Остров-град Свияжск', callback_data: '№'}],
                [{text: 'Музей-заповедник Болгар', callback_data: '№'}],
                [{text: 'Вернуться к предложениям', callback_data: 'services'}],
                [{text: 'Вернуться к меню', callback_data: 'home'}]
            ]
        }
    });
}