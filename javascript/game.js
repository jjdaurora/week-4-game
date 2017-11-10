

// 1. define an array of characters, health variables 

var characters = ["html", "css", "python", "ruby"]
var playerHealth = 100
var opponentHealth = 100 
	
// 3. click a character to select it from the array 


(document).ready(function() {
   var move = false;
    $("#player-html-5").click(function() {
      if (!move) {
        $("#sidemenu").animate({left: "80px"});
        sideMenu = true;
      }
      else {
        $("#sidemenu").animate({left: "0px"});
        sideMenu = false;     
      }
    });
}); 


// 4. when a character is selected, it moves into the user's attacking position

// 5. when a character is selected, the available characters to attack move into the defending position

// 6. when attack is selected, a random amount of the defender's health is dimished // while a random amount of the user's player health is dimished

// 9. IF the user's health drops to 0, then game win --> "You lose!" Button: "Select a new opponent" --> User can select new opponent and repeat

// 10. IF the user's defenders health drops to 0, then game win > "You win!" --> Button: "Play Again!

// 11. IF the user defeats all opponent, then "GAME WINNER" --> remove all divs -> insert new div for "New Game?"

