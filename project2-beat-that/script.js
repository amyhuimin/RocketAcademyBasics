var rollDice = function () {
  // produce a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // remove the decimal
  var randomInteger = Math.floor(randomDecimal);
  // add 1 to get a number between 1 and 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var main = function (input) {
  if (input != "") {
    var gameStart = false;
    var message = "Please click on the 'Submit' button to start the game.";
  }
  while (input == "") {
    gameStart = true;
    if (gameStart == true) {
      var diceOne = rollDice();
      console.log(diceOne);
      var diceTwo = rollDice();
      console.log(diceTwo);
      var chooseDiceOrder = function (oneOrTwo) {
        if (oneOrTwo == 1) {
          var finalNumber = Number(diceOne + diceTwo);
          console.log(finalNumber);
        }
      };
    }
    var message = `🎲 WELCOME, PLAYER 1 🎲
    <br>You rolled ${diceOne} for dice one and ${diceTwo} for dice two.
    <br>Choose the order of the dice by entering "1" or "2".`;
  }
  return message;
};

//There are 2 players and players take turns.
//When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
//The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
//After both players have rolled and chosen dice order, the player with the higher combined number wins.
