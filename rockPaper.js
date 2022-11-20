const rock=[0,'rock'];
const paper=[1,'paper'];
const scissors=[2,'scissors'];

function randomNumGenerator(){
    let rand= Math.floor(Math.random()*3);
    return rand;
};
 


function computerChoice(){
    let random=randomNumGenerator();
   
    if(random===rock[0]){
        console.log(rock[1])
        return(rock[0])
    }else if(random===paper[0]){
        console.log(paper[1])
        return(paper[0])
    }else if(random===scissors[0]){
        console.log(scissors[1])
        return(scissors[0])
    }
}


function playerChoice(){
    let playerInput=prompt("please make a choice:");
    playerInput=playerInput.toLowerCase();
    if(playerInput===rock[1]){
        console.log(rock[1])
        return(rock[0])
    } 
    else if(playerInput===paper[1]){
        console.log(paper[1])
        return(paper[0])
    } 
    else if(playerInput===scissors[1]){
        console.log(scissors[1])
        return(scissors[0])
    } 
    else{
        console.log("please make a correct choice!")
    }
    
}




function game(player,computer){
    
   
    
    breakme:if(player==computer){
        console.log("It is a draw.")
        return "draw";
    }
    else if(player==0 && computer==1){
        console.log("Computer wins")
        return "comp wins";
    }else if(player==1 && computer==2){
         console.log("Computer wins")
        return "comp wins";
    }else if(player==2 && computer==0){
        console.log("Computer wins")
        return "comp wins";
    
    
    }else if (player==0 && computer==2){
        console.log("player wins")
        return "player wins"
    }else if (player==1 && computer==0){
        console.log("player wins")
        return "player wins"
    }else if (player==2 && computer==1){
        console.log("player wins")
        return "player wins"
    }
    else{
        console.log("please enter a valid choice");
        break breakme;
        
    }
}

function fiveGame(){
    let playeScore=0;
    let computerScore=0;
    let draw=0;
    for(i=0; i<5;i++){
        const p=playerChoice();
        const c=computerChoice();
        let result=game(p,c);
        if(result=="player wins"){
            playeScore+=1;
            console.log("your score is "+playeScore);

        }else if(result=="comp wins"){
            computerScore+=1;
            console.log("Computer score is "+computerScore);
        }else{
            draw+=1;
            console.log("Draw score is "+draw);

        }

    }

    if(playeScore>computerScore){
        console.log("player wins the game ")
    }else if(playeScore<computerScore){
        console.log("computer wins the game")
    }else{
        console.log("it is a draw")
    }

}

fiveGame();