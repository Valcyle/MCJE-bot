const mineflayer = require('mineflayer');
const { lookNearestEntity } = require('./skills/behavior/lookNearestEntity');
const { pathfinder } = require('mineflayer-pathfinder');
const { pathfindToEntity } = require('./skills/behavior/pathfindToEntity');

const bot = mineflayer.createBot({
    host: 'localhost', // optional
    port: 25565,       // optional
    username: 'Axe', // email and password are required only for online-mode
    version: '1.21.4',
    offline: true,
})

bot.loadPlugin(pathfinder);

bot.on('login', () => {
    console.log('Bot logged in');
    bot.chat('Hello world!');
})

bot.once('spawn', () => {
    setTimeout(() => {
        const target = bot.players['Valcyle'];
        console.log(bot.players);
        pathfindToEntity(bot, target);
    }, 1000);
})

// bot.on('physicsTick', () => {
//     lookNearestEntity(bot);
// })