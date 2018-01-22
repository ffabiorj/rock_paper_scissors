// create a game;
(function(){
    'user strict';

    // function start the game.
    function game(){

        var $choice = document.querySelectorAll('[data-js="choice"]');
        var $playScore = document.querySelector('#playerScore');
        var $computerScore = document.querySelector('#computerScore');
        var $draw = document.querySelector('#draw');
        var $zero = document.querySelector('[data-js="zero"]');
        var $information = document.querySelector('#information');

        
        function computerPlay() {
            var games = ['rock', 'paper', 'scissors'];
            var numbers = Math.floor(Math.random() * 2);
            return games[numbers];
        }
    
        var computerSelection = computerPlay();

        Array.prototype.forEach.call($choice, function(button){
            button.addEventListener('click', function(){
                var playerSelection = this.value;
                var computerSelectionB = computerPlay();
                playRound(playerSelection, computerSelectionB);
            }, false);
        });
        
        function playRound(playerSelection, computerSelection) {
            
            var game = {
                rock: {'scissors': true, 'paper': false},
                paper: {'rock': true, 'scissors': false},
                scissors: {'paper': true, 'rock': false}
            };
        
            if (playerSelection === computerSelection) {
                $draw.innerText ++;
                return $information.innerText = 'You had draw!';       
            }
            if (game[playerSelection][computerSelection]) {
                $playScore.innerText ++;
                return $information.innerText = 'You Wow! ' + playerSelection + ' beats ' + computerSelection;
            } else {
                $computerScore.innerText ++;
                return $information.innerText = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
            }
        }
            
        $zero.addEventListener('click', function(){
            $playScore.innerText = 0;
            $draw.innerText = 0;
            $computerScore.innerText = 0;
        }, false);

    }
    
    game();
}());