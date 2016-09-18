window.onload = function() {


    console.log("it's loaded");


    function hideBattleShip() {
         $("#submit-button").click(function() {
          var shipLocation = $("#battleShipInput").val()
          $("#return-text").html("<strong>Captain 2</strong>. Where will you fire your torpedos?");
          guessBattleShip(shipLocation)
        });
    }


    function guessBattleShip(BattleShipCoordinates) {
        this.BattleShipCoordinates = BattleShipCoordinates;
         $("#guess-button").click(function() {
          var guessLocation = $("#fireTorpedo").val();
          checkGuess(guessLocation, BattleShipCoordinates);
        });
    }


    hideBattleShip();


    function checkGuess(guessBattleShip, hideBattleShip) {
        this.guessBattleShip = guessBattleShip;
        this.hideBattleShip = hideBattleShip;
        matrixLookup = {'a': 'two', 'b': 'three', 'c': 'four', 'd': 'five', 'e': 'six', 'f': 'seven', 'g': 'eight'};
        if (guessBattleShip === hideBattleShip) {
            $("#return-text").html("<strong>Captain 2</strong>, you sunk Captain 1's battle ship!");
            $("#row" + BattleShipCoordinates[1]).find("." + matrixLookup[BattleShipCoordinates[0]]).css( "background", "green" );
        }
        else {
            $("#return-text").html("<strong>Captain 2</strong>, the torpedos missed.  Hurry and reload!!! We're being fired upon!!! Pick another coordinate and fire again!!!");
            $("#row" + guessBattleShip[1]).find("." + matrixLookup[guessBattleShip[0]]).css( "background", "white" );
        }
    }


    function newGame() {
         $("#reset-button").click(function() {
          console.log(location.reload());
        });
    }

    newGame();
}
