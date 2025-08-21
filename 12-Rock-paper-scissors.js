
  //Update score in this lesson into our project 
  let score = JSON.parse(localStorage.getItem('score')) || {
    //assigning a default values to the score 
          losses: 0,
          wins: 0,
          ties: 0
        };
  
  //Lesson 09 to apply DOM
  updateScoreElement();

  //getting local storage 
  //console.log(JSON.parse(localStorage.getItem('score')));
  //🌟if we have to check if score is null or not 
  //🌟or !score 
  //the same with the above so we can comment this one 
  /* 
  if (score === null) {
    score = {
      losses: 0,
      wins: 0,
      ties: 0
    };
  }
  */
  
  let isAutoPlaying = false;
  let intervalId;
  
  
  //const autoPlay = () => {
    
  //};
  
  function autoPlay() {
    if (!isAutoPlaying) {
    intervalId = setInterval(()=>{
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
   } else {
     clearInterval(intervalId);
     isAutoPlaying = false;
   }
  };
  
  //changed onclick by The following codes of line 
  document.querySelector('.js-rock-button').addEventListener('click',() => {
    playGame('Rock');
  });
  document.querySelector('.js-paper-button').addEventListener('click',() => {
    playGame('Paper');
  });
  document.querySelector('.js-scissors-button').addEventListener('click',() => {
    playGame('Scissors');
  });
  
    
    
    document.body.addEventListener('keydown',(event) => {
      //play on the game the key that we have press 
      if (event.key === 'r') {
        playGame('Rock');
      } else if(event.key === 'p') {
        playGame('Paper');
      } else if(event.key === 's') {
        playGame('Scissors');
      }
      
    });
    
    
    
    
    function playGame(playerMove) {
    const computerMove = pickComputerMove();
    
    // another if statements 
    let results = '';
    
    if (playerMove === 'Scissors'){
        if (computerMove === 'Rock') {
        results = 'You Lose.';
      } else if (computerMove === 'Paper') {
        results = 'You Win.';
      } else if (computerMove === 'Scissors'){
        results = 'Tie.';
      }
      
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
        results = 'You Win.';
      } else if (computerMove === 'Paper') {
        results = 'Tie.';
      } else if (computerMove === 'Scissors'){
        results = 'You Lose.';
      }
      
    } else if (playerMove === 'Rock') {
      
        if (computerMove === 'Rock') {
        results = 'Tie.';
      } else if (computerMove === 'Paper') {
        results = 'You Lose.';
      } else if (computerMove === 'Scissors') {
        results = 'You Win.';
      }
    }
    
    //update score is starting here 
    if (results === 'You Win.')  {
      score.wins += 1;
    } else if (results === 'You Lose.') {
      score.losses += 1;
    } else if (results === 'Tie.') {
      score.ties += 1;
    }
    
    //setting local storage 
    //local storage only support string,so you have to be changing into string 
    localStorage.setItem('score',JSON.stringify(score));
    
    //To update the score on the page 
    updateScoreElement();
    //To display the results on the page 
    document.querySelector('.js-result').innerHTML
     = results;
    //And the second one ys here 
    document.querySelector('.js-move').innerHTML
     = `You 
          <img src="/F.JavaScript Practice Exercises And projects /IconPhotos/${playerMove}-emoji.png" alt="rock image"
          class="move-icon">
          <img src="/F.JavaScript Practice Exercises And projects /IconPhotos/${computerMove}-emoji.png" alt="scissors image"
          class="move-icon">
          Computers `;
    
  }
  
  
  
  function updateScoreElement() {
        document.querySelector('.js-score')
         .innerHTML = `Wins:${score.wins} , Losses:${score.losses} , Ties:${score.ties}`;
  }
  
  
  
  
  
  
  
  function pickComputerMove() {
    
        let computerMove = '';
    
      const randomNumber = Math.random();
      
      if (randomNumber >= 0 && randomNumber < 1/3) {
       computerMove = 'Rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
       computerMove = 'Paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1) {
       computerMove = 'Scissors';
      }
      return computerMove;
  }
    
    
