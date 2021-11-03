"use strict";
const randomDamage = () => {
  let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  return randomNumber;
};
const chooseOption = (opt1, opt2) => {
  var randNum = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
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
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);
const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    var attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        console.log(logDeath(player1, player2));
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("Sudha", "Chandu", 100, 100);
