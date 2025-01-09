const mineflayer = require('mineflayer');
const { Movements, goals } = require('mineflayer-pathfinder');
const GoalFollow = goals.GoalFollow;

/**
 * 
 * @param {mineflayer.Bot} bot 
 * @param {mineflayer.Player} target
 * @returns 
 */
function pathfindToEntity(bot, target) {
    if (!target || !target.entity) {
        bot.chat('No entity found');
        return;
    }
    
    const mcData = require('minecraft-data')(bot.version);
    const movements = new Movements(bot, mcData);
    bot.pathfinder.setMovements(movements);

    const goal = new GoalFollow(target.entity, 1);
    bot.pathfinder.setGoal(goal, true);
}

module.exports = { pathfindToEntity };