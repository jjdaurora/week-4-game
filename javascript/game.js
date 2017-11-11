// 1. define an array of characters, health variables 

var game = {
	
	python: {
			power: 12, 
			health: 100, 
			src: '<img src="images/python.png" width=120 height: 120>',
			name: "python",
			},
	
	ruby: {
		power: 1000, 
		health: 100, 
		src:'<img src="images/ruby.png" width=150 height: 140>', 
		name: "ruby",
		}
	
}


	$("#player-python").html(game.python.src);
	$("#player-ruby").html(game.ruby.src);
	$("#health-python").html(game.python.health);
	$("#health-ruby").html(game.ruby.health);
	
	 


	$(".game-icons").on('click', function(){
		var selectPlayer = true;
		$(this).addClass('playerSelectBorder');

		 
		});


// var move = function () {
// 	$(".game-icons").on('click', function(){
		 
// 		if($("#player-spot").children().length <= 0) {
// 		$("#player-spot").append(this);	
// 		}	
// 	})
// }

	// move ();

	
	$("#attack-button").on('click', function() {
	var playerAttack = Math.floor(Math.random() * game.python.power);
	game.ruby.health =- game.python.power
		console.log(playerAttack);
	}); 
