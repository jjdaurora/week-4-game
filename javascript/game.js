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
	name: "python",
	}

var css = {
	power: 10, 
	health: 100, 
	src:'<img src="images/css.png" width=80 height: 80>', 
	name: "ruby",
	
	}


// post player images to the screen (this is probably hacky)

	$("#player-python").html(python.src);
	$("#player-ruby").html(ruby.src);
	$("#player-html").html(html.src);
	$("#player-css").html(css.src);

	$("#choose-player-message").hide().append("Choose your player").fadeIn(1000)
// select player moving them into the attacking position 
// then select defender by moving them into the defending position 

var moveToAttackZone = function () {
	$(".game-icons").on('click', function(){
		if ($("#player-spot").children().length <= 0) {
		$("#player-spot").append(this);	
		$("#choose-player-message").fadeOut('slow', function() {
		$("#choose-defender-message").hide().append("Now choose who you'd like to fight!").fadeIn('slow'); 
		})

	}
		else if ($("#player-spot").children().length = 1 && $("#defender-spot").children().length <=0) {
		$("#defender-spot").append(this);
		$("#choose-defender-message").fadeOut('slow', function () {
		$("#attack-start-message").hide().append("Your health appears on the left.").fadeIn(1000).delay(1000).fadeOut('slow', function() {
		$("#player-health").data(python, { health: 100 }).fadeIn(3000);
		$("#attack-start-message").empty().append("Your defender's health appears on the right.").fadeIn(1000).delay(1000).fadeOut('slow', function() {
		$("#defender-health").append(this.health).fadeIn(3000);
		$("#attack-start-message").empty().append("Let the fighting begin!").fadeIn(1000).delay(2000).fadeOut('slow');
					})
				})
			})
		}
	})
}
	
	moveToAttackZone();




	
	// $("#attack-button").on('click', function() {
	// var playerAttack = Math.floor(Math.random() * game.python.power);
	// game.ruby.health =- game.python.power
	// 	console.log(playerAttack);
	// }); 
