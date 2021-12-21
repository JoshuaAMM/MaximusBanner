import File from './FilesFunctions';
import path from 'path';
import { Client, Intents, Message } from 'discord.js';

type _JSON = {
    strikes: {
        username: string,
        discriminator: string,
        id: string,
        attempts_left: number,
        max_attempts: number
    }[]
};

type author_object = {
    username: string,
    discriminator: string,
    id: string,
    attempts_left: number,
    max_attempts: number
}

class Strikes {

    public static strikesRegister(msg: Message<boolean>) {

        const _path = path.resolve(__dirname, '../../src/database/members_strikes.json');

        let data: _JSON = JSON.parse(File.readFile(_path));

        const userName = msg.author.username;

        let searchAuthorMatch = data.strikes.find(e => e.username === msg.author.username);

        if (!searchAuthorMatch) {
            data.strikes!.push({
                username: userName,
                attempts_left: 4,
                max_attempts: 5,
                discriminator: msg.author.discriminator,
                id: msg.author.id
            });
        } else {
            searchAuthorMatch.attempts_left -= 1;
            const index = data.strikes.indexOf(searchAuthorMatch);
            data.strikes[index] = searchAuthorMatch;
        }
        
        File.writeFile(data, _path);
    }

    public static getUserObject(msg: Message<boolean>): author_object {
 
        const read = File.readFile(path.resolve(__dirname, '../../src/database/members_strikes.json'));
        const data: _JSON = JSON.parse(read);

        const authorObjectStrikes = data.strikes.find(a => a.username === msg.author.username);
        
        const justif: author_object = {
            username: '',
            attempts_left: 0,
            max_attempts: 0,
            discriminator: '',
            id: ''
        }

        if(!authorObjectStrikes) return justif;

        return authorObjectStrikes;
    }
}

export default Strikes;