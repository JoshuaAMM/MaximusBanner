import dotenv from 'dotenv';
dotenv.config();

import MaximusBannerFunctionalities from './models/MaximusBannerFunctionalities';

const maximusBanner = new MaximusBannerFunctionalities( process.env.CLIENT_SECRET || '' );

// Start The Bot
maximusBanner.startBot()

// Receive Messages
maximusBanner.receiveMessages();
