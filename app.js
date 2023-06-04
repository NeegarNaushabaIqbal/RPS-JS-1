let play=confirm("Would you like to play rock-paper-scissors?");
if(play){
let playerChoice=prompt("Choose rock, paper or scissors.");
if(playerChoice){
let playerOne=playerChoice.trim().toLowerCase();
if(playerOne==="rock"||
   playerOne==="paper"||
   playerOne==="scissors"){
   let computerChoice=Math.floor(Math.random()*3+1);
   let computer=computerChoice===1?"rock":computerChoice===2?"paper":"scissors";

   let result=playerOne===computer?"Tie!":
              playerOne==="rock"&&computer==="scissors"?`playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins!`:
              playerOne==="scissors"&&computer==="paper"?`playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins!`:
              playerOne==="paper"&&computer==="rock"?`playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins!`:
              `playerOne:${playerOne}\ncomputer:${computer}\ncomputer wins!`;

    alert(result);

    let playAgain=confirm("Wanna play again?");
    playAgain?location.reload():alert("Okay, thanks for playing.");
   }
   else{
    alert("You didn't make a valid choice!");
   }
}
else{
    alert("You changed your mind? Okay, maybe next time!");
}
}
else{
    alert("Ok, maybe next time!");
}