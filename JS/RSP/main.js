"use strict";



let rock = "Rock";
let scissors = "Scissors";
let paper = "Paper";

let Rock = rock.toLowerCase();
let Scissors = scissors.toLowerCase();
let Paper = paper.toLowerCase();

alert("Welcome to the Rock vs Scissors vs Paper");  

let firstplayer = prompt('First player write: Rock or Scissors or Paper', '');
let secondplayer = prompt('Second player write: Rock or Scissors or Paper', '');

if ((firstplayer == rock) && (secondplayer == rock)
     || (firstplayer == scissors) && (secondplayer == scissors)
         || (firstplayer == paper) && (secondplayer == paper)){
    alert('Draw');
}else
{
if ((firstplayer == paper) && (secondplayer == rock) )
{
    alert('First Player Win, Paper > Rock');
}else{ if ((firstplayer == rock) && (secondplayer == scissors) )
{
    alert('First Player Win, Rock > Scissors')
}else{ if ((firstplayer == scissors) && (secondplayer == paper) )
{
    alert('пFirst Player Win, Scissors > Paper')
}else{ if ((secondplayer == paper) && (firstplayer == rock) )
{
    alert('Second Player Win, Paper > Rock');
}else { if ((secondplayer == rock) && (firstplayer == scissors) )
{
    alert('Second Player Win, Rock > Scissors')
}else { if ((secondplayer == scissors) && (firstplayer == paper) )
{
    alert('Second Player Win, Scissors > Paper');
}else{
    alert("Error");}
}
}
}
}
}
}
alert("Restart page - press F5")
