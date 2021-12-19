import { MessageEmbed } from 'discord.js';

class EmbedMessages {

    constructor(){}

    public warnUserBadWord( author: string ): MessageEmbed {

        const warnMessage = new MessageEmbed()
              .setColor('#0099ff')
              .addFields(
                  { name: 'Frobidden Word Detected!', value: `${ author } has been warned` },
                  { name: '\u200B', value: '\u200B' },
                  { name: `Total Strikes:`, value: `2`, inline: true },
                  { name: `Strikes Left:`, value: `1`, inline: true }
              )

        return warnMessage;

    }

}

export default EmbedMessages;