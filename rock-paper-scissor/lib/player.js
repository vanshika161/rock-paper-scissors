function Player() {
    this.name = 'Player';
}

/**
 * This is a Abstract method that to Find the  player's choice.
 * @param cb
 */
Player.prototype.makeChoice = function (cb) {
    throw new Error("should be implemented in subclasses");
};


module.exports = Player;