import { Message } from "discord.js";
import EmbedMessages from "./EmbedMessages";
import readFile from "./readFiles";

class BadWordDetecter {
  private _msg: Message<boolean>;
  private _embedMessages: EmbedMessages;
  private _baneableWords: string[];

  constructor(_msg: Message<boolean>) {
    this._msg = _msg;
    this._embedMessages = new EmbedMessages();
    this._baneableWords = this.getBaneableWords();
  }

  private getBaneableWords() {
    const path = "./src/database/banned_words.txt";
    const data = readFile(path);

    if (!data) return [];

    const banneableWords = data.split("\n");

    return banneableWords;
  }

  private async _deleteMessage() {
    const warnMessage = this._embedMessages.warnUserBadWord(
      this._msg.author.toString()
    );
    await this._msg.reply({ embeds: [warnMessage] });
    await this._msg.delete();
  }

  private validateMessage(message: string) {


    let _msg = message.split("\n").join(" ");
    _msg = _msg.split("\r").join(" ");
    _msg = _msg.split("\t").join(" ");
    _msg = _msg.split(" ").join("");

    for(let i = 0; i < this._baneableWords.length; i++) {
      if(_msg.includes(this._baneableWords[i])) {
        console.log(`${this._baneableWords[i]} is banned`);
        this._deleteMessage();
        break;
      }
    }
  }

  public async detectBadWords() {
    const msg_content = this._msg.content.toLowerCase().trim();
    this.validateMessage(msg_content);
  }
}

export default BadWordDetecter;
