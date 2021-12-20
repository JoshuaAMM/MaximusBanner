"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmbedMessages_1 = __importDefault(require("./EmbedMessages"));
const readFiles_1 = __importDefault(require("./readFiles"));
class BadWordDetecter {
    constructor(_msg) {
        this._msg = _msg;
        this._embedMessages = new EmbedMessages_1.default();
        this._baneableWords = this.getBaneableWords();
    }
    getBaneableWords() {
        const path = "./src/database/banned_words.txt";
        const data = (0, readFiles_1.default)(path);
        if (!data)
            return [];
        const banneableWords = data.split("\n");
        return banneableWords;
    }
    _deleteMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            const warnMessage = this._embedMessages.warnUserBadWord(this._msg.author.toString());
            yield this._msg.reply({ embeds: [warnMessage] });
            yield this._msg.delete();
        });
    }
    validateMessage(message) {
        let _msg = message.split("\n").join(" ");
        _msg = _msg.split("\r").join(" ");
        _msg = _msg.split("\t").join(" ");
        _msg = _msg.split(" ").join("");
        for (let i = 0; i < this._baneableWords.length; i++) {
            if (_msg.includes(this._baneableWords[i])) {
                console.log(`${this._baneableWords[i]} is banned`);
                this._deleteMessage();
                break;
            }
        }
    }
    detectBadWords() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg_content = this._msg.content.toLowerCase().trim();
            this.validateMessage(msg_content);
        });
    }
}
exports.default = BadWordDetecter;
//# sourceMappingURL=BadWordDetecter.js.map