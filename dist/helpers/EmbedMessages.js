"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const StrikesRegister_1 = __importDefault(require("./StrikesRegister"));
class EmbedMessages {
    constructor() { }
    warnUserBadWord(msg) {
        const authorObjectStrike = StrikesRegister_1.default.getUserObject(msg);
        const warnMessage = new discord_js_1.MessageEmbed()
            .setColor('#0099ff')
            .addFields({ name: 'Forbidden Word Detected!', value: `${msg.author} has received a strike` }, { name: 'Date:', value: `${new Date(msg.createdTimestamp)}` }, { name: `Max Strikes:`, value: `${authorObjectStrike === null || authorObjectStrike === void 0 ? void 0 : authorObjectStrike.max_attempts}`, inline: true }, { name: `Strikes Left:`, value: `${authorObjectStrike === null || authorObjectStrike === void 0 ? void 0 : authorObjectStrike.attempts_left}`, inline: true });
        return warnMessage;
    }
}
exports.default = EmbedMessages;
//# sourceMappingURL=EmbedMessages.js.map