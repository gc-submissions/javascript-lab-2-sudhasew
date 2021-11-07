"use strict";

const randomDamage = () => {
  let randonNum = Math.floor(Math.random() * 10 + 1);
  return randonNum;
};

const chooseOption = (opt1, opt2) => {
  const randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

function attackPlayer(health) {
  var result = health - randomDamage();
  return result;
}

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    var attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
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

function getGrade(num) {
  if (num > 90) {
    return "A";
  } else if (num > 80 && num <= 90) {
    return "B";
  } else if (num > 70 && num <= 80) {
    return "C";
  } else if (num > 60 && num <= 70) {
    return "D";
  } else if (num < 60) {
    return "F";
  }
}
console.log(getGrade(55)); // Returns A
//console.log(getGrade(83)); Returns B
//console.log(getGrade(74)); Returns C
//console.log(getGrade(65)); Returns D
//console.log(getGrade(55)); Returns F
