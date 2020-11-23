/* work on some formatting here as well, moving the game up */

$("#game-div").hide();
$(".loading").hide();

var game = {
  round: 0,
  availableGuesses: ["rock", "paper", "scissor"],
  ties: 0,
  roundWinner: undefined,
	images: ["paper.jpeg", "rock.jpg", "scissor.jpg"]
}

var player = {
  guess: undefined,
  guesses: [],
  wins: 0,
	losses: 0
}

var computer = {
  guess: undefined,
  guesses: []
}

for(var i = 0; i < game.images.length; i++){
	var rpsImage = $("<img>", {
		src: game.images[i],
		height: 200,
		width: 200,
		class: "rps-images"
	});
	rpsImage.css("padding", "15px");
	rpsImage.data("choice", game.images[i].split(".")[0]);
	$("#my_choices").append(rpsImage);
}

$("#wins_count").text(player.wins);
$("#ties_count").text(game.ties);

$(".rps-images").click(function(){
  game.round++;
	player.guess = $(this).data("choice");
	computer.guess = game.availableGuesses[Math.floor(Math.random() * game.availableGuesses.length)];

	$("#my_guess").text(player.guess);
	$("#computer_guess").text(computer.guess);

	player.guesses.push(player.guess);

	if(player.guess == "paper" && computer.guess == "paper"){
    game.ties++;
    game.roundWinner = "Tie";
  } else if (player.guess == "rock" && computer.guess == "rock"){
    game.ties++;
    game.roundWinner = "Tie";
  } else if (player.guess == "scissor" && computer.guess == "scissor"){
    game.ties++;
    game.roundWinner = "Tie";
  } else if (player.guess == "paper" && computer.guess == "rock"){
    player.wins++;
    game.roundWinner = "Player";
  } else if (player.guess == "rock" && computer.guess == "scissor"){
    player.wins++;
    game.roundWinner = "Player";
  } else if (player.guess == "scissor" && computer.guess == "paper"){
    player.wins++;
    game.roundWinner = "Player";
  } else if (player.guess == "rock" && computer.guess == "paper"){
    game.roundWinner = "Computer";
  } else if (player.guess == "paper" && computer.guess == "scissor"){
    game.roundWinner = "Computer";
  } else if (player.guess == "scissor" && computer.guess == "rock"){
    game.roundWinner = "Computer";
  }

	if(player.guesses.length > 10){
		$("#players_guesses").text(player.guesses.slice(player.guesses.length - 10, player.guesses.length));
	} else {
		$("#players_guesses").text(player.guesses);
	}

  var winningPercentage = ((player.wins/game.round) * 100).toFixed(2);

  $("#round_winner").text(game.roundWinner);
  $("#winning_percentage").text(winningPercentage + "%");
	$("#wins_count").text(player.wins);
	$("#ties_count").text(game.ties);

});

$("#start-game-button").click(function(){

	$("#start-game-button").hide();
	$(".loading").css("display", "inline-flex");

	setTimeout(function(){
		$(".loading").hide();
		$("#game-div").show();
	}, 2500)
});
