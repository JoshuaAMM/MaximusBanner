"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function readFile(path) {
    try {
        const data = fs_1.default.readFileSync(path, "utf8");
        return data;
    }
    catch (error) {
        throw new Error("error reading file " + error);
    }
}
exports.default = readFile;
//# sourceMappingURL=readFiles.js.map