let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(event){
    if(started == false){
    started = true;    
    levelUp();
    }
 }
);

function gameFlash(btn){
  btn.classList.add("flash"); 
  setTimeout(function (){
    btn.classList.remove("flash");
  },250)
}

function userFlash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function (){
      btn.classList.remove("userflash");
    },250)
  }
  



function levelUp(){
  userSeq =[];  
  level++;
  h2.innerText = "Level "+level;

  //random btn choose
  let rndIndx = Math.floor(Math.random()*4);
  let rndColor = btns[rndIndx];
  let rndBtn = document.querySelector(`.${rndColor}`);
  gameSeq.push(rndColor);
  gameFlash(rndBtn);
}


function checkAns(indx){ 
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game over! your score is <b>${level}.</br>  press any key to start!</br>`;
        document.querySelector('body');
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },1000);
        reset();
    }
}





function btnPress(){
    let btn = this;
    console.log(this);
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


