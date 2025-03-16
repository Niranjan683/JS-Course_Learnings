//function function1(n) {
//    console.log('Hello')
//    console.log(n+n)
//}
//function1(12);

let score =JSON.parse(localStorage.getItem('score')) || {wins: 0, losses:0, ties: 0};
//console.log(score)

/*
if (!score){
    score = {wins: 0, losses:0, ties: 0}
}
*/    

updateScoreElement()

function PlayGame(Move){
    let result ='';
    const computerMove= PickComputerMove();
    if (Move==='scissors'){
        if (computerMove==='scissors'){
            result='Tie'
        }else if (computerMove==='rock'){
            result= 'You\'ve lost'
        }else{
            result='You Won'
        }

    } else if (Move ==='rock'){
        if (computerMove==='rock'){
            result='Tie'
        }else if (computerMove==='paper'){
            result= 'You\'ve lost'
        }else{
            result='You Won'
        }

    }else {
        if (computerMove==='paper'){
            result='Tie'
        }else if (computerMove==='scissors'){
            result= 'You\'ve lost'
        }else{
            result='You Won'
        }
    }
    
    if (result==='You Won'){
        score.wins+=1;
    }else if(result==="You've lost"){
        score.losses+=1;
    }else{
        score.ties+=1;
    }
    localStorage.setItem("score",JSON.stringify(score));

    updateScoreElement()
    
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML= `
        You
        <img src="images/${Move}-emoji.png" alt="" class="move-icon">
        <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
        Computer`;
            
    //alert(`You picked: ${Move} \n Computer picked ${computerMove} \n The result is: ${result} \n Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`)
}

function updateScoreElement(){
    document.querySelector(".js-score").innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`; 
}

function PickComputerMove(){
    let computerMove = ''
    const randomNumber = Math.random();
    
    if(randomNumber>=0 && randomNumber< 1/3){
        computerMove= 'rock'
    }else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper'
    }else{
        computerMove='scissors'
    }
    
    return computerMove;

}

