var rollDice = function () {
  // produce a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // remove the decimal
  var randomInteger = Math.floor(randomDecimal);
  // add 1 to get a number between 1 and 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var gameMode = "not started";
var currentPlayer = "";
var diceOne = 0;
var diceTwo = 0;
var finalNumber = 0;
var outputMessage = "";
var playerOneScore = 0;
var playerTwoScore = 0;
//Must make sure to have global variables first so that the function can store the variables!

var chooseOrder = function (input) {
  if (Number(input) == 1) {
    console.log("input is 1");
    finalNumber = diceOne + diceTwo;
    outputMessage = `You chose 1. Your number is ${finalNumber}.`;
  } else if (Number(input) == 2) {
    console.log("input is 2");
    finalNumber = diceTwo + diceOne;
    outputMessage = `You chose 2. Your number is ${finalNumber}.`;
  } else if (input != 1 || input != 2) {
    outputMessage = `Please enter 1 or 2.`;
  }
};

var rollTwoDice = function () {
  diceOne = String(rollDice());
  diceTwo = String(rollDice());
  console.log(diceOne + diceTwo);
  console.log(gameMode);
  gameMode = "order";
  outputMessage = `🎲 WELCOME, ${currentPlayer} 🎲
  <br>You rolled ${diceOne} for dice one and ${diceTwo} for dice two.
  <br>Choose the order of the dice by entering "1" or "2".`;
};

var main = function (input) {
  if (gameMode == "not started") {
    gameMode = "started";
    currentPlayer = "Player 1";
    return "Please click on the 'Submit' button to start the game.";
  }
  if (gameMode == "started") {
    rollTwoDice();
    gameMode = "order";
    return outputMessage;
  }
  if (gameMode == "order") {
    chooseOrder(input);
    gameMode = "started";
    //currentPlayer = "Player 2";
    return `${currentPlayer}, you chose ${input}. Your final number is ${finalNumber}.`;
  }
  if (gameMode == "started") {
    console.log(gameMode);
    console.log(currentPlayer);
    currentPlayer = "Player 2";
    rollTwoDice();
    gameMode = "order";
    return outputMessage;
  }
  if (gameMode == "order") {
    chooseOrder(input);
    return `${currentPlayer}, you chose ${input}. Your final number is ${finalNumber}.`;
  }
};

//if (currentPlayer == "Player 1") {
//currentPlayer = "Player 2";
//} else if (currentPlayer == "Player 2") {
//currentPlayer = "Player 1";
//}
//When I dont put return finalNumber outside chooseOrder function, nothing gets returned!

//There are 2 players and players take turns.
//When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
//The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
//After both players have rolled and chosen dice order, the player with the higher combined number wins.
