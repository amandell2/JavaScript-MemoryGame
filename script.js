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
