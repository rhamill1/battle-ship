window.onload = function() {


    console.log("it's loaded");


    function HideBattleShip() {
        $("#submit-button").click(function() {
            var shipLocation = $("#battleShipInput").val()
            $("#return-text").html("<strong>Captain 2</strong>. Where will you fire your torpedos?");
            GuessBattleShip(shipLocation)
        });
    }


    HideBattleShip();


    function GuessBattleShip(BattleShipCoordinates) {
        this.BattleShipCoordinates = BattleShipCoordinates;
        $("#guess-button").click(function() {
            var guessLocation = $("#fireTorpedo").val();
            CheckGuess(guessLocation, BattleShipCoordinates);
        });
    }


    function CheckGuess(guessBattleShip, hideBattleShip) {
        this.guessBattleShip = guessBattleShip;
        this.hideBattleShip = hideBattleShip;
        matrixLookup = {'a': 'two', 'b': 'three', 'c': 'four', 'd': 'five', 'e': 'six', 'f': 'seven', 'g': 'eight', 'h': 'nine'};
        if (guessBattleShip === hideBattleShip) {
            $("#return-text").html("<strong>Captain 2</strong>, you sunk Captain 1's battle ship!");
            $("#row" + BattleShipCoordinates[1]).find("." + matrixLookup[BattleShipCoordinates[0]]).css( "background", "#ea391e" );
        }
        else if (guessBattleShip[1] > 4 || (!(guessBattleShip[0] in matrixLookup)) || guessBattleShip.length > 2) {
            $("#return-text").html("Prepare the brig for Smee. He's had too much grog to man the torpedo hatch!");
        }
        else {
            $("#return-text").html("<strong>Captain 2</strong>, the torpedos missed.  Hurry and reload!!! We're being fired upon!!! Pick another coordinate and fire again!!!");
            $("#row" + guessBattleShip[1]).find("." + matrixLookup[guessBattleShip[0]]).css( "background", "#667e94" );
        }
    }


    function NewGame() {
        $("#reset-button").click(function() {
            console.log(location.reload());
        });
    }


    NewGame();


}
