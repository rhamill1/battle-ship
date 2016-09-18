
URL: https://rhamill1.github.io/battle-ship/index.html


Technology Usage Goals
    jquery
    skeleton


Phase 1 - MVP | guess, hide and check

    User Story
    	user 1 hides a battleship in 1 cell
    	user 2 guesses what cell the battleship is hidden in
    	if user 2 guesses correctly, return ‘You sunk my battleship’
    		else return ‘miss, try again’

    MVP
    	display simple board
        user input hide
        guess
            return hit or miss

    Wire Frame

    Pseudo Code
        HideBattleShip function () {
        };

        ShootBattleShip function () {
        };

        CheckShot function() {
        };

    Technology Usage Goal
        jquery - Incorporated!
        skeleton - Incorporated!


Phase 2 - Elaborate | clean looking and performing 1 round game
    Goals
        function
            display guess and result text in the browser
            allow user to reset the game
        form
            remove hard coding from css.  make responsive
                format grid to stay on screen
                format grid axis to be clean and consistent (margins, padding and borders)


Phase 3 - Elaborate

    Add two more columns - Good
    Center elements within their divs
    change background color of div after hit


Phase 4 - Finish Requirements
    Double check I've achieved all requirements
        publish on public url
        confirm oop constructors
    Clean code formatting up - 5 minutes
    Clean up read me - 15 minutes


Phase 5 - Above and Beyond | Time Permitting
    Allow Captain 1 to choose cell size of ship
    Update guess and check to hit vs. sunk
    Allow both players to be able to hide and fire torpedos
