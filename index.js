const mineflayer = require('mineflayer');
const { lookNearestEntity } = require('./skills/behavior/lookNearestEntity');
const { pathfinder } = require('mineflayer-pathfinder');
const { pathfindToEntity } = require('./skills/behavior/pathfindToEntity');
// const mineflayerViewer = require('prismarine-viewer').mineflayer;
var autoVersionForge = require('minecraft-protocol-forge').autoVersionForge;

const bot = mineflayer.createBot({
    host: 'tanakalabo.net', // optional
    port: 25565,       // optional
    username: 'Axe', // email and password are required only for online-mode
    // version: '1.21.4',
    version: false, //forge test
    offline: true,
})

autoVersionForge(bot._client);

bot.loadPlugin(pathfinder);

bot.on('login', () => {
    console.log('Bot logged in');
    bot.chat('Hello world!');
})

bot.once('spawn', () => {
    // mineflayerViewer(bot, { port: 3000 }) // Start the viewing server on port 3000
    setTimeout(() => {
        const target = bot.players['KENkyuuin'];
        console.log(bot.players);
        pathfindToEntity(bot, target);
    }, 1000);
})

// bot.on('physicsTick', () => {
//     lookNearestEntity(bot);
// })