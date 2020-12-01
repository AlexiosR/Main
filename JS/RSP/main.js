"use strict";



let rock = "rock";
let scissors = "scissors";
let paper = "paper";

let aboutRock = rock.toLowerCase();
let aboutScissors = scissors.toLowerCase();
let aboutPaper = paper.toLowerCase();

alert("Welcome to the Rock vs Scissors vs Paper");  

let firstplayer = prompt('Pl_1 Write: Rock or Scissors or Paper', '');
let secondplayer = prompt('Pl_2 Write: Rock or Scissors or Paper', '');

if ((firstplayer == rock) && (secondplayer == rock)
     || (firstplayer == scissors) && (secondplayer == scissors)
         || (firstplayer == paper) && (secondplayer == paper)){
    alert('Draw,restart page press "F5" ')
}else
{
    if ((firstplayer == paper) && (secondplayer == rock) )
    {
        alert('First Player Win, Paper > Rock');
    }else{ if ((firstplayer == rock) && (secondplayer == scissors) )
        {
            alert('First Player Win, Rock > Scissors');
        }else{ if ((firstplayer == scissors) && (secondplayer == paper) )
            {
                alert('пFirst Player Win, Scissors > Paper');
            }else{ if ((secondplayer == paper) && (firstplayer == rock) )
                {
                    alert('Second Player Win, Paper > Rock');
                }else { if ((secondplayer == rock) && (firstplayer == scissors) )
                    {
                        alert('Second Player Win, Rock > Scissors');
                    }else { if ((secondplayer == scissors) && (firstplayer == paper) )
                        {
                            alert('Second Player Win, Scissors > Paper');
                        }else{
                            alert("418 I’m a teapot");}
            }
        }
    }
}
}
}
alert("418 I’m a teapot ")
