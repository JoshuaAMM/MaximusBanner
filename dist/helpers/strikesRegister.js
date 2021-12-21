"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FilesFunctions_1 = __importDefault(require("./FilesFunctions"));
const path_1 = __importDefault(require("path"));
class Strikes {
    static strikesRegister(msg) {
        const _path = path_1.default.resolve(__dirname, '../../src/database/members_strikes.json');
        let data = JSON.parse(FilesFunctions_1.default.readFile(_path));
        const userName = msg.author.username;
        let searchAuthorMatch = data.strikes.find(e => e.username === msg.author.username);
        if (!searchAuthorMatch) {
            data.strikes.push({
                username: userName,
                attempts_left: 4,
                max_attempts: 5,
                discriminator: msg.author.discriminator,
                id: msg.author.id
            });
        }
        else {
            searchAuthorMatch.attempts_left -= 1;
            const index = data.strikes.indexOf(searchAuthorMatch);
            data.strikes[index] = searchAuthorMatch;
        }
        FilesFunctions_1.default.writeFile(data, _path);
    }
    static getUserObject(msg) {
        const read = FilesFunctions_1.default.readFile(path_1.default.resolve(__dirname, '../../src/database/members_strikes.json'));
        const data = JSON.parse(read);
        const authorObjectStrikes = data.strikes.find(a => a.username === msg.author.username);
        const justif = {
            username: '',
            attempts_left: 0,
            max_attempts: 0,
            discriminator: '',
            id: ''
        };
        if (!authorObjectStrikes)
            return justif;
        return authorObjectStrikes;
    }
}
exports.default = Strikes;
//# sourceMappingURL=StrikesRegister.js.map