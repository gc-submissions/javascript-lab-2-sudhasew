"use strict";
const randomDamage = () => {
  let randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
};
randomDamage();

const chooseOption = (opt1, opt2) => (randNum === 1 ? "opt1" : "opt2");
var randNum = 0;
console.log(chooseOption(1, 0));
