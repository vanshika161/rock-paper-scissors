/**
 * These are the dependencies being used
 */

 var GameLogicStrategy = require("./game-logic-strategy");
 var util = require("util");
 var helpers = require('../helper');
 
 function ExtendedRpsGameLogicStrategy() {
 
     GameLogicStrategy.call(this);
 }
 
 util.inherits(ExtendedRpsGameLogicStrategy, GameLogicStrategy);
 
 /**
  *  This Strategy is used to add new weapons for ex. i have taken the name to be lizard and spock (as read online)
  * In the Traditional rock paper scissor , only rock paper and scissor are present . But if we want to add addtional weapons 
  * this is also possible if the requirement comes in future
  * @param opts
  */
 ExtendedRpsGameLogicStrategy.prototype.addWeapons = function (opts) {
 
     if (helpers.isNullOrWhitespace(opts.beaten) || helpers.isNullOrWhitespace(opts.beater) || helpers.isNullOrWhitespace(opts.beaterExistingWeapon)) {
         throw new Error('Given additional weapon parameters are invalid.');
     }
 
     if (!this.weaponDict[opts.beaterExistingWeapon]) {
         throw new Error('Given beater existing weapon is invalid.');
     }
 
     var beaterExistingWeaponId;
 
     for (var prop in this.weaponDict) {
         var currentWeaponId = this.weaponDict[prop];
         if (opts.beaterExistingWeapon !== prop) {
             this.weaponDict[prop] = currentWeaponId + 2;
         } else {
             beaterExistingWeaponId = currentWeaponId;
         }
     }
 
     this.weaponDict[opts.beater] = beaterExistingWeaponId + 1;
     this.weaponDict[opts.beaten] = beaterExistingWeaponId + 2;
 };
 
 /**
  * We can also implement our own algo. to beat . For ex if Weapon1 can beat Weapon 2 . we can say write code like this
  * We can  overriding canBeat method that comes from base class as follows;
  YourRpsGameLogicStrategy.prototype.canBeat = function (weapon1, weapon2) {
     //implementation
  };
  */

 module.exports = ExtendedRpsGameLogicStrategy;