        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        const cards = document.querySelectorAll(".memoryCard");
        const

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
              cards.forEach(card => {
                card.firstElementChild.classList.add("displayNone");
                card.lastElementChild.classList.remove("displayNone");
            })

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
        reset.addEventListener("click",() => {
            gameBoard.style.visibility="hidden";
            clearInterval(intervalID);
            totalSeconds = -1;
            setTime()
            shuffle()
            
        })
        

        const reset = document.getElementById("reset"); 
        reset.addEventListener("click",() => {  
            totalSeconds = -1;
            setTime()
            shuffle()
            //console.log(cards);
            
        });
>>>>>>> c2130e312b23e543478e8cfa727a024ee0389bdd
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
    function checkForMatch(){
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        console.log(isMatch);
        isMatch ? disableCards() : unflipCards();
    }
        }  
    }
        }  
    }

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


 //function that shuffles on start and reset

 /*EXTRAS
-something that logs the number of matches
-congrats screen at the end with time logged
-add flipping animation
 */

