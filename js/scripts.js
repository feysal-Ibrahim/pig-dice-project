$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".player-console").show();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);
});
  $("button#new-game").click(function(event) {
    $(".player-console").hidd();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
      $("#total-score-1").empty();
      $("#roll-1").empty();
      $("#round-total-2").empty();
      $("#total-score-2").empty();
      $("#roll-2").empty();

      $(".start-menu").show();
    });