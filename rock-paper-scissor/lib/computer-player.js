
 var Player = require("./player");
 var util = require("util");
 
 function ComputerPlayer(gameLogicStrategy) {
     this.gameLogicStrategy = gameLogicStrategy;
 }
 
 util.inherits(ComputerPlayer, Player);
 
 /**
  * Here we need to Make choice for computer player randomly.
  * @param cb
  */
 ComputerPlayer.prototype.makeChoice = function (cb) {
     var weapons = this.gameLogicStrategy.weapons;
     var rnd = Math.floor(Math.random() * 100 * weapons.length) % (weapons.length);
     cb(null, weapons[rnd]);
 };
 
 
 module.exports = ComputerPlayer;
 