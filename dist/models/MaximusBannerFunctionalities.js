"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const BadWordDetecter_1 = __importDefault(require("../helpers/BadWordDetecter"));
class MaximusBannerFunctionalities {
    constructor(_client_secret) {
        this._client_secret = _client_secret;
        this.client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES] });
    }
    receiveMessages() {
        this.client.on('messageCreate', (msg) => {
            const badWordDetecter = new BadWordDetecter_1.default(msg);
            badWordDetecter.detectBadWords();
        });
    }
    startBot() {
        this.client.on('ready', () => {
            var _a;
            console.log(`\nBot ${(_a = this.client.user) === null || _a === void 0 ? void 0 : _a.tag} has started successfully`);
        });
        this.client.login(this._client_secret);
    }
}
exports.default = MaximusBannerFunctionalities;
//# sourceMappingURL=MaximusBannerFunctionalities.js.map