        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        const cards = document.querySelectorAll(".memoryCard");

        //intializes the timer
        function setTime()
        {   
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
            
        }

        //makes timer run
        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
        
        //initially shuffle cards
        function shuffle() {
            cards.forEach(card => {
              let randomPos = Math.floor(Math.random() * 6);
              card.style.order = randomPos;
              card.style.visibility="visible";
            });
          }
        //begins the timer on start click
        const gameBoard = document.getElementById("gameboard");
        const start = document.getElementById("start");
        start.addEventListener("click",() => {
            gameBoard.style.visibility="visible";
            intervalID = setInterval(setTime, 1000);
            shuffle()
        })

        //resets the timer on reset click
        /*NEED TO ADD PAUSE TO TIMER ON RESET
        NEED TO SHUFFLE CARDS WHEN RESET IS CLICKED
        */
        const reset = document.getElementById("reset"); 
        reset.addEventListener("click",() => {  //Get the board to complete reset
            gameBoard.style.visibility="hidden";
            clearInterval(intervalID);
            totalSeconds = -1;
            setTime()
            shuffle()
            //console.log(cards);
            cards.forEach(card => {
                card.firstElementChild.classList.add("displayNone");
                card.lastElementChild.classList.remove("displayNone");
            })
        });

 //function that flips the card to show images
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    const frontCard = this.firstElementChild;
    const backCard = this.lastElementChild;
    frontCard.classList.toggle('displayNone');
    backCard.classList.toggle('displayNone');
    
    if(!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
        //second click
        hasFlippedCard = false;
        secondCard = this;
    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);
    //check if match
        checkForMatch();
    }

    //funtion that checks for match
    let count = 0;
    function checkForMatch(){
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        console.log(isMatch);
        if(isMatch){
            count++;
            console.log(count);
        }
        isMatch ? disableCards() : unflipCards();
        gameOver();
    }

    function gameOver(){
        if(count===3){
        clearInterval(intervalID);
            totalSeconds = -1;
        }
    };
    /*function matchCounter(){
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        let count = 0;
        console.log(count);
        for(i = 0; i >= ; i++){
        if(isMatch === true){
            count++
            }
        return console.log(count);
        }  
        
    };*/

    function disableCards(){
        setTimeout(()=>{
        firstCard.style.visibility = "hidden";
        secondCard.style.visibility = "hidden";
        resetBoard();
        }, 1500); 
    }

    function unflipCards(){
        lockBoard = true;
        setTimeout(()=>{
            firstCard.firstElementChild.classList.add('displayNone');
            firstCard.lastElementChild.classList.remove('displayNone');
            secondCard.firstElementChild.classList.add('displayNone');
            secondCard.lastElementChild.classList.remove('displayNone');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
      }

cards.forEach(card=>card.addEventListener('click', flipCard));

//function that stops timer when last two cards match
/*
check if visibility is hidden (style.visibility)
create a counter of hidden cards
when it hits 6 cards hidden stop timer and end game
*/



 /*EXTRAS
-something that logs the number of matches
-congrats screen at the end with time logged
-add flipping animation
 */