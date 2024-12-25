let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const usescorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randind = Math.floor(Math.random() * 3);
    return option[randind];
}

const drawgame = () => {
    console.log("draw game");
    msg.innerHTML="Game Draw";
    msg.style.backgroundColor="yellow";
}

const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win");
        userscore++;
        usescorepara.innerHTML=userscore;
        msg.innerHTML="You Win";
        msg.style.backgroundColor="green";
    }else{
        console.log("computer win");
        compscore++;
        compscorepara.innerHTML=compscore;
        msg.innerHTML="You Lose";
        msg.style.backgroundColor="red";
    }
}


const playgame = (userchoice) => {
    console.log("user-choice=", userchoice);
    const compchoice = gencompchoice();
    console.log("comp-choice=", compchoice);

    if (userchoice === compchoice) {
        // drw
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
       
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})