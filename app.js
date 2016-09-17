window.onload = function() {

console.log("it's loaded");


function hideBattleShip() {
    // var battleShipLocation = eventlistener from ;

    $("#submit-button").click(function() {
      console.log('The submit button worked!!!');
      var shipLocation = $("#battleShipInput").val()
      console.log("I'm at " + shipLocation);
    });

}


function guessBattleShip(battleShipLocation) {
    this.battleShipLocation = battleShipLocation;
    // var guess = user input;

    // if

}
hideBattleShip();

}
