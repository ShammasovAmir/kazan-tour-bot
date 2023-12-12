import {createReadStream} from "fs";
import {home} from "./views/home.js";
import {about} from "./views/about.js";
import {services} from "./views/services.js";
import {faq} from "./views/faq.js";
import {nature} from "./views/nature.js";
import {artGallery} from "./views/faq/art-gallery.js";

export async function initMessageRouter(bot, msg) {
    const data = msg.data;
    const chatID = msg.message.chat.id;
    switch (data) {
        case 'home':
            await home(msg, chatID, bot, false)
            break;
        case 'services':
            await services(bot, chatID);
            break;
        case 'about':
            await about(bot, chatID);
            break;
        case 'faq':
            await faq(bot, chatID);
            break;
        case 'nature':
            await nature(bot, chatID);
            break;
        case 'art':
            await artGallery(bot, chatID);
            break;
        default:
            break;
    }
}