const mineflayer = require('mineflayer');
const { lookNearestEntity } = require('./skills/behavior/lookNearestEntity');

const bot = mineflayer.createBot({
    host: 'localhost', // optional
    port: 25565,       // optional
    username: 'Axe', // email and password are required only for online-mode
    version: '1.21.4',
    offline: true,
})

bot.on('login', () => {
    console.log('Bot logged in');
    bot.chat('Hello world!');
})

bot.on('physicsTick', () => {
    lookNearestEntity(bot);
})