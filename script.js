let userScore=0;
let compScore=0;


const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp");



const genCompChoice =()=>{
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3 );
    return options[randIdx];

};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw 🤝"
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win🥳 ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
    
        msg.innerText=`You Lose😢 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame =(userChoice)=>{
    console.log("user choice =" ,userChoice);
    //to generate computers choice;
    const compChoice=genCompChoice();
    console.log("comp choice =" ,compChoice);
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
    let userWin = true;
    if(userChoice ==="rock"){
            userWin=compChoice==="paper"? false:true;}
    else if(userChoice==="paper"){
            userWin=compChoice==="sicssors"? false:true;}
    else{
            userWin=compChoice==="rock"? false:true; }
    showWinner(userWin , userChoice,compChoice);        
        }
        
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
