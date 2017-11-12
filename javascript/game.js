//create character objects

var	python = {
	power: 20, 
	health: 100, 
	src: '<img src="images/python.png" width=80 height: 80>',
	name: "python",
	}

var ruby = {
	power: 15, 
	health: 100, 
	src:'<img src="images/ruby.png" width=80 height: 80>', 
	name: "ruby",
	}

var html = {
	power: 5, 
	health: 100, 
	src: '<img src="images/html.svg" width=80 height: 80>',
	name: "html",
	}

var css = {
	power: 10, 
	health: 100, 
	src:'<img src="images/css.png" width=80 height: 80>', 
	name: "css",
	
	}


var playerChosen; 
var defenderChosen;

// post player images to the screen (this is probably hacky)

	$("#player-python").append(python.src + python.health + " " + python.name);
	$("#player-ruby").html(ruby.src + ruby.health + " " + ruby.name);
	$("#player-html").html(html.src + html.health + " " + html.name);
	$("#player-css").html(css.src + css.health + " " + css.name);

	$("#choose-player-message").hide().append("Choose your player").fadeIn(1000)
// select player moving them into the attacking position 
// then select defender by moving them into the defending position 

var moveToAttackZone = function () {
	$(".game-icons").on('click', function(){
		playerChosen = (this);
		if ($("#player-spot").children().length <= 0) {
		$("#player-spot").append(this);	
		$("#choose-player-message").fadeOut('slow', function() {
		$("#choose-defender-message").hide().append("Now choose who you'd like to fight!").fadeIn('slow'); 
		})
	}
		else if ($("#player-spot").children().length = 1 && $("#defender-spot").children().length <=0) {
		defenderChosen = (this);
		$("#defender-spot").append(this);
		$("#choose-defender-message").fadeOut('slow', function () {
		$("#game-message").hide().append("Click the attack button to defeat your enemy.").fadeIn(1000).delay(1000).fadeOut('slow', function() {
		$("#game-message").empty().append("Defeat them all to be the best code of them all!").fadeIn(1000).delay(1000).fadeOut('slow', function() {
		$("#game-message").empty().append("Let the fighting begin!").fadeIn(1000).delay(2000).fadeOut('slow');
					})
				})
			})
		}
	})
}
	


var attack = $("#attack-button").on('click', function() {
	var playerAttack = determineAttack(python.power);
	ruby.health -= playerAttack;
	$("#player-ruby").html(ruby.src + ruby.health + " " + ruby.name);
	$("#attack-button").prop("disabled", true); 
	$("#game-message").empty().append("Your opponent is about to strike!").fadeIn(1000).delay(1000).fadeOut('slow');
	if (isGameOver(ruby.health)) {
		$("#game-message").empty().append("Python won!").fadeIn(1000).delay(2000).fadeOut('slow' ,function() {
		$("#attack-button").prop("disabled", true); 
		$("#game-message").empty().append('<button type="button" class="btn btn-success">"Play Again?"</button>').fadeIn(1000).delay(2000)
		});
		
		}
	else if (isGameOver(python.health)) {
		$("#game-message").empty().append("Ruby won!").fadeIn(1000).delay(2000).fadeOut('slow');
		$("#attack-button").prop("disabled", true);
		$("#game-message").empty().append('<button>"Play Again?"</button>').fadeIn(1000).delay(2000);
		$("game-message").on('click',function() {
			location.reload();
		});
		
		}
	
	setTimeout(function() {
		var opponentAttack = determineAttack(ruby.power);
		python.health -= opponentAttack;
		$("#player-python").html(python.src + python.health + " " + python.name);
		$("#attack-button").prop("disabled", false); 
		}, 2000)

	}); 

var determineAttack = function (power) {
	return Math.floor(Math.random() * power);

}

var isGameOver = function(health) {
	return health <= 0; 
}

moveToAttackZone();



