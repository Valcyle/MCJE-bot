const mineflayer = require('mineflayer');

/**
 * 
 * @param {mineflayer.Bot} bot 
 */
function lookNearestEntity(bot) {
    const filter = (entity) => entity.type === 'player';
    const nearestPlayer = bot.nearestEntity(filter);

    if(!nearestPlayer) return;

    const pos = nearestPlayer.position;
    bot.lookAt(pos.offset(0, nearestPlayer.height, 0));
}
    
module.exports = { lookNearestEntity };