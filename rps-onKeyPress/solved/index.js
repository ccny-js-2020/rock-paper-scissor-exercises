/*
  - add wins ties and losses to a table
*/

var game = {
  round: 0,
  availableGuesses: ["r", "p", "s"],
  ties: 0,
  roundWinner: undefined
}

var player = {
  guess: undefined,
  guesses: [],
  wins: 0
}

var computer = {
  guess: undefined,
  guesses: []
}

$(document).keyup(function(e){

  if(game.availableGuesses.indexOf(e.key) > -1){
    game.round++;

    player.guess = e.key;
    player.guesses.push(player.guess);

    computer.guess = game.availableGuesses[Math.floor(Math.random() * game.availableGuesses.length)];

    runRpsGameLogic(player, computer, game);
    displayGameData(player, computer, game);
  } else {
    alert("Please select " + game.availableGuesses.toString())
  }

});

function runRpsGameLogic(playerObject, computerObject, gameObject){
  if(playerObject.guess == "p" && computerObject.guess == "p"){
    gameObject.ties++;
    gameObject.roundWinner = "Tie";
  } else if (playerObject.guess == "r" && computerObject.guess == "r"){
    gameObject.ties++;
    gameObject.roundWinner = "Tie";
  } else if (playerObject.guess == "s" && computerObject.guess == "s"){
    gameObject.ties++;
    gameObject.roundWinner = "Tie";
  } else if (playerObject.guess == "p" && computerObject.guess == "r"){
    player.wins++;
    gameObject.roundWinner = "Player";
  } else if (playerObject.guess == "r" && computerObject.guess == "s"){
    player.wins++;
    gameObject.roundWinner = "Player";
  } else if (playerObject.guess == "s" && computerObject.guess == "p"){
    player.wins++;
    gameObject.roundWinner = "Player";
  } else if (playerObject.guess == "r" && computerObject.guess == "p"){
    gameObject.roundWinner = "Computer";
  } else if (playerObject.guess == "p" && computerObject.guess == "s"){
    gameObject.roundWinner = "Computer";
  } else if (playerObject.guess == "s" && computerObject.guess == "r"){
    gameObject.roundWinner = "Computer";
  }
}

function displayGameData(playerObject, computerObject, gameObject){
  $("#player_guess").text(playerObject.guess);
  $("#computer_guess").text(computerObject.guess);

  $("#round_winner").text(gameObject.roundWinner);

  $("#wins_count").text(playerObject.wins);
  $("#winning_percentage").text(((playerObject.wins/gameObject.round) * 100).toFixed(2) + "%");
  $("#ties_count").text(gameObject.ties);

  $("#players_guesses").text(playerObject.guesses.join(", "))
}
