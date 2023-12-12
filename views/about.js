export async function about(bot, chatID) {
    await bot.sendMessage(chatID, `Для нас самым главным показателем работы являются положительные эмоции и незабываемые впечатления туристов от посещения Казани и Татарстана. Экскурсии в компании опытного гида будут интересны и тем, кто хочет узнать что-то новое о родных местах, и тем, кто приехал в Татарстан на короткий отпуск. Отправляясь на экскурсию по Казани, вы можете быть уверены в безопасности и комфорте на всём протяжении экскурсионной программы. Будем рады, если вы окажитесь среди наших клиентов!`, {
        reply_markup: {
            inline_keyboard: [
                [{text: '🔗 Наш сайт', callback_data: 'site'}],
                [{text: 'Наши контакты', callback_data: 'about'}],
                [{text: 'Вернуться на главное меню', callback_data: 'home'}]
            ]
        }
    });
}