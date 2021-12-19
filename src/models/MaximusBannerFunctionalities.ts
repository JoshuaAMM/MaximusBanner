import { Client, Intents, Message } from "discord.js";
import BadWordDetecter from '../helpers/BadWordDetecter';

class MaximusBannerFunctionalities {

    private _client_secret: string;
    public client: Client;

    constructor( _client_secret: string ) {
        this._client_secret = _client_secret;
        this.client = new Client( { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] } );
    }

    public receiveMessages(): void {

        this.client.on('messageCreate', ( msg: Message<boolean> ) => {
            const badWordDetecter = new BadWordDetecter( msg );
            badWordDetecter.detectBadWords();
        });

    }

    public startBot(): void {

        
        this.client.on('ready', () => {
            console.log(`\nBot ${ this.client.user?.tag } has started successfully`);
        });

        this.client.login(this._client_secret);
    }
}

export default MaximusBannerFunctionalities;