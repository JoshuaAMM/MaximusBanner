import fs from 'fs';
import readline from 'readline';
import { Message } from 'discord.js';
import EmbedMessages from './EmbedMessages';

class BadWordDetecter {

    private _msg: Message<boolean>;
    private _embedMessages: EmbedMessages;

    constructor( _msg: Message<boolean> ){
        this._msg = _msg;
        this._embedMessages = new EmbedMessages();
    }

    private async _validator( line: string ): Promise<void> {

        const msg_content: string = this._msg.content.toLowerCase();

        if ( msg_content.indexOf( line.toLowerCase() ) >= 0 )
        {
            // TODO: Cuando el mensaje incluye más de una palabra
            // TODO: Este IF intenta borrar 3 mensajes, cuando en realidad solo hay uno
            const warnMessage = await this._embedMessages.warnUserBadWord( this._msg.author.toString() );
            await this._msg.reply({embeds: [warnMessage]});
            await this._msg.delete();
        }
    } 

    public async detectBadWords(): Promise<void> {

        const fileStream: fs.ReadStream = fs.createReadStream('./src/database/banned_words.txt');

        const rl: readline.Interface = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await ( const line of rl )
        {
            this._validator(line);
        }
    }

}

export default BadWordDetecter;