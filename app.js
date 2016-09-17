window.onload = function() {


    console.log("it's loaded");


    function hideBattleShip() {
         $("#submit-button").click(function() {
          console.log('The submit button worked!!!');
          var shipLocation = $("#battleShipInput").val()
          console.log("I'm at " + shipLocation);
          guessBattleShip(shipLocation)
        });
    }


    function guessBattleShip(BattleShipCoordinates) {
        this.BattleShipCoordinates = BattleShipCoordinates;
         $("#guess-button").click(function() {
          console.log('The guess button worked!!!');
          var guessLocation = $("#fireTorpedo").val();
          console.log("The ship's at " + BattleShipCoordinates);
          console.log("FIRE torpedos at " + guessLocation);
          checkGuess(guessLocation, BattleShipCoordinates);
        });
    }


    hideBattleShip();


    function checkGuess(guessBattleShip, hideBattleShip) {
        this.guessBattleShip = guessBattleShip;
        this.hideBattleShip = hideBattleShip;
        if (guessBattleShip === hideBattleShip) {
            console.log('you sunk my BattleShip');
        }
        else {
            console.log("The torpedos missed.  Hurry and reload!!! We're being fired upon!!!")
        }
    }
}
