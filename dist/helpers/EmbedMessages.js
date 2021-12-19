"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class EmbedMessages {
    constructor() { }
    warnUserBadWord(author) {
        const warnMessage = new discord_js_1.MessageEmbed()
            .setColor('#0099ff')
            .addFields({ name: 'Frobidden Word Detected!', value: `${author} has been warned` }, { name: '\u200B', value: '\u200B' }, { name: `Total Strikes:`, value: `2`, inline: true }, { name: `Strikes Left:`, value: `1`, inline: true });
        return warnMessage;
    }
}
exports.default = EmbedMessages;
//# sourceMappingURL=EmbedMessages.js.map