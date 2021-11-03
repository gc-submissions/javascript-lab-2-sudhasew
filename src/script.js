"use strict";
const randomDamage = () => {
  let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  return randomNumber;
};
const chooseOption = (opt1, opt2) => {
  var randNum = Math.floor(Math.random() * 2);
  var optionSelected = randNum === 0 ? opt1 : opt2;
  return optionSelected;
};
function attackPlayer(health) {
  var result = health - randomDamage();
  return result;
}
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
