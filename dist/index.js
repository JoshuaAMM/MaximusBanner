"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MaximusBannerFunctionalities_1 = __importDefault(require("./models/MaximusBannerFunctionalities"));
const maximusBanner = new MaximusBannerFunctionalities_1.default(process.env.CLIENT_SECRET || '');
// Start The Bot
maximusBanner.startBot();
// Receive Messages
maximusBanner.receiveMessages();
//# sourceMappingURL=index.js.map