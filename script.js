var aiChoice = "";
var previousChoice = "c";
var friend = 1;
var playerPoints = 0;
var aiPoints = 0;

var strat = prompt("tit for tat or grim trigger?");

function startRound(strat)
{
   var playerChoice = prompt("Cooperate or defect? (type c/d)");
   if(strat == "tit for tat")
   {
      aiChoice = tittat(playerChoice);
   }
   else if(strat == "grim trigger")
   {
      aiChoice = grimtrigger(playerChoice);
   }

   document.getElementById("text").innerHTML = "You chose "+ playerChoice + "<br>Opponent chose "+ aiChoice;
   if(playerChoice == "c")
   {
      if(aiChoice == "c")
      {
         playerPoints += 1;
         aiPoints += 1;
      }
      else if(aiChoice == "d")
      {
         playerPoints += 0;
         aiPoints += 2;
      }
   }
   else if(playerChoice == "d")
   {
      if(aiChoice == "c")
      {
         playerPoints += 2;
         aiPoints += 0;
      }
      else if(aiChoice == "d")
      {
         playerPoints += -1;
         aiPoints += -1;
      }
   }
   document.getElementById("points").innerHTML = "Player: "+ playerPoints + " points<br>Opponent: " + aiPoints + " points";
}

function tittat(playerChoice)
{
   if(previousChoice == "c")
   {
      previousChoice = playerChoice;
      return "c";
   }
   else
   {
      previousChoice = playerChoice;
      return "d";
   }
}

function grimtrigger(playerChoice)
{
   if(friend == 1)
   {
      if(playerChoice == "d")
      {
         friend = 0;
      }
      return "c";
   }
   else
   {
      return "d";
   }
}