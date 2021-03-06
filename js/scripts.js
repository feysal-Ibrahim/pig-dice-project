//business logic
var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + "you rolled a 1! Kindly Your turn is over!")
  } else {
  this.tempscore += this.roll;
  }
}

Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName  + "Your turn is over, please pass the mouse!");
}
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + "HORRAY!! You are the winner!");
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}

var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}

//frontend logic here
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);
});
  $("button#new-game").click(function(event) {
    $(".player-console").hide();
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
   $("button#player1roll").click(function(event){
      player1.roll = throwdice();
      $("#die-roll-1").text(player1.roll);
      player1.rollone();
      $("#round-total-1").text(player1.tempscore);
    });

    $("button#player2roll").click(function(event){
      player2.roll = throwdice();
      $("#dice-roll-2").text(player2.roll);
      player2.rollone();
      $("#round-total-2").text(player2.tempscore);
    });

    $("button#player1hold").click(function(event){
      player1.hold();
      $("#total-score-1").text(player1.totalscore);
      $("#round-total-1").empty();
      $("#die-roll-1").empty();
      player1.winnerCheck();
    });

    $("button#player2hold").click(function(event){
      player2.hold();
      $("#total-score-2").text(player2.totalscore);
      $("#round-total-2").empty();
      $("#die-roll-2").empty();
      player2.winnerCheck();
    });

  });

