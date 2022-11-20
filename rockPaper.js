const rock=[0,'ROCK'];
const paper=[1,'PAPER'];
const scissors=[2,'SCISSORS'];
const selectRock=document.getElementById('btn-rock');
const selectPaper=document.getElementById('btn-paper');
const selectScissors=document.getElementById('btn-scissors');
const displayResult=document.getElementById('display-result');
const playerSelection=document.getElementById('player-choice')
const compSelection=document.getElementById('computer-choice')


selectRock.addEventListener('click',()=>{
    let player=selectRock.textContent;
    playerSelection.textContent=`Player choice is ${player}`
    let computer=computerChoice();
    compSelection.textContent=`Computer choice is ${computer}`
    playGame(player,computer)
})

selectPaper.addEventListener('click',()=>{
    let player=selectPaper.textContent;
    playerSelection.textContent=`Player choice is ${player}`
    let computer=computerChoice();
    compSelection.textContent=`Computer choice is ${computer}`
    playGame(player,computer)
    })
selectScissors.addEventListener('click',()=>{
    let player=selectScissors.textContent;
    playerSelection.textContent=`Player choice is ${player}`
    let computer=computerChoice();
    compSelection.textContent=`Computer choice is ${computer}`
    playGame(player,computer)
})

const randomNumGenerator=()=>{
    let rand= Math.floor(Math.random()*3);
    return rand;
};
 


const computerChoice=()=>{
    let random=randomNumGenerator();
   
    if(random===rock[0]){
        return(rock[1])
    }else if(random===paper[0]){
        return(paper[1])
    }else if(random===scissors[0]){
        return(scissors[1])
    }
}



const playGame=(player,computer)=>{
    if(player==computer){
        displayResult.textContent="Its a draw"
     }else if(player==rock[1] && computer==paper[1]){
         displayResult.textContent=`Computer Wins`
         return 'comp wins'
     }else if(player==paper[1] && computer==scissors[1]){
         displayResult.textContent=`Computer Wins`
         return 'comp wins'
     }else if(player==scissors[1] && computer==rock[1]){
         displayResult.textContent=`Computer Wins`
         return 'comp wins'
     }else if (player==rock[1] && computer==scissors[1]){
         displayResult.textContent=`Player Wins`
         return 'player wins'
     }else if (player==paper[1] && computer==rock[1]){
         displayResult.textContent=`Player Wins`
         return 'player wins'
     }else if (player==scissors[1] && computer==paper[1]){
         displayResult.textContent=`Player Wins`
         return 'player wins'
     }
     else{
         console.log("please enter a valid choice");
        }
    }