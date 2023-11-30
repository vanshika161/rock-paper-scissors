#!/usr/bin/env node


 var Player = require("./player");
 var util = require("util");
 
 function UserPlayer(userWeaponChoiceProvider) {
     this.userWeaponChoiceProvider = userWeaponChoiceProvider;
 }
 
 util.inherits(UserPlayer, Player);
 
 /**
  * This is used to get user choice using `user weapon choice provider`.
  * @param cb
  */
 UserPlayer.prototype.makeChoice = function (cb) {
     this.userWeaponChoiceProvider.getInput(function (err, value) {
         if (err) {
             return cb(err);
         }
         console.log(util.format('\nYou chose %s.\n', value));
         cb(null, value);
     });
 
 };
 

 module.exports = UserPlayer;
 