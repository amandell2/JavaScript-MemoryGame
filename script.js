        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;

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

        //begins the timer on start click
        const start = document.getElementById("start");
        start.addEventListener("click",() => {
            intervalID = setInterval(setTime, 1000);
        })

        //resets the timer on reset click
        /*NEED TO ADD PAUSE TO TIMER ON RESET
        NEED TO SHUFFLE CARDS WHEN RESET IS CLICKED
        */
        const reset = document.getElementById("reset");
        reset.addEventListener("click",() => {
            totalSeconds = 0;
            document.getElementById("minute").innerHTML = '0';
            document.getElementById("seconds").innerHTML = '0';
        })

        //function that stops timer when last two cards match

        //function that shuffles on start and reset

        //function that flips the card to show images

        //create a function that lets us only click two at a time (locks gameboard)

        //first card should stay flipped until second card is flipped

        //function to determine matches or not


        /*EXTRAS
        -something that logs the number of matches
        -congrats screen at the end with time logged
        -add flipping animation
         */