# pig-dice-project
### A Website For My PING DICE Project, 20/07/2018
## By **FEISAL IBRAHIM**
### Description
This is a web application that allows two players to play a game of Pig Dice.
### Technologies Used
I have used HTML tools,styled it with css rules and ran behaviour with the advanced JavaScript tools using the jQuery library.
### Specification
1:create a function object Player with property
ex input 
function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
ex output: player(roll,tempscore,turn and playername)


2:create another property roll once over the object player by using a prototype
ex input: Player.prototype.rollone = function() {
  if (this.roll === 1) {
ex output should give us our own object player with the new property added on:player(roll,tempscore,turn,playername,roll one and hold)


3: again create another property .hold over the object player by using a prototype
ex input: Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
ex output: should give us our own object player with the new property added on:player(roll,tempscore,turn,playername,roll one and hold).


4:again create another property .newGame over the object player by using a prototype .newGame
ex input:Player.prototype.newGame = function () {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}
ex output:should give us our own object player with the new property added on:player(roll,tempscore,turn,playername,roll one,hold and new Game).


5:if a number is divisible by both 5 and 15 it return pingpong of the output number 15
ex input:lastly i passed a function to clear the values entered by the users when the browser reloads
ex output:var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}
### Setup/Installation Requirements
Clone this repository

Open it in your machine

Make changes or review it.

### Support and contact details
In case you have Feedback.you can forward it on my email:addictivefazman@gmail.com,
Contact @0713027855,
Online Platforms,Fb https://www.facebook.com/addictivefazman,
                Watsapp @0713027855  Instagram: https://www.instagram.com/real-side-nigga/
                linkedln: https://www.linkedin.com/in/feisal-ibrahim-05594615b/


### License
*Copyright Feisal 2018 ****
