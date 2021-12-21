import { MessageEmbed, Message } from 'discord.js';
import Strikes from './StrikesRegister';

class EmbedMessages {

    constructor(){}

    public warnUserBadWord( msg: Message<boolean> ): MessageEmbed {

        const authorObjectStrike = Strikes.getUserObject( msg );

        const warnMessage = new MessageEmbed()
              .setColor('#0099ff')
              .addFields(
                  { name: 'Forbidden Word Detected!', value: `${ msg.author } has received a strike` },
                  { name: 'Date:', value: `${ new Date(msg.createdTimestamp) }` },
                  { name: `Max Strikes:`, value: `${ authorObjectStrike?.max_attempts }`, inline: true },
                  { name: `Strikes Left:`, value: `${ authorObjectStrike?.attempts_left }`, inline: true }
              );

        return warnMessage;

    }

}

export default EmbedMessages;