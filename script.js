// variables
let timerInterval;
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');
const sound = new Audio('Jungkook.mp3');
let workTime;
let breakTime;



let seconds = "00";

// display
window.onload = () => {
    workTime = prompt("Type how many minutes you want to work (e.g. 25, 50, etc.):", 25);
    breakTime = prompt("Type how long you want your breaks (e.g. 5, 10, etc.):", 5);

    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    workTitle.classList.add('active');
}


// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes < 10 ? `0${workMinutes}` : workMinutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        // start
        seconds--;

        if(seconds === 0) {
            workMinutes--;

            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++;
                    sound.play();
                    // change the panel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++;

                    // change the panel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
       
    };
    clearInterval(timerInterval);
    timerInterval = setInterval(timerFunction, 1000);
  }
    // start countdown
    // 1000 = 1s
    function resetTimer() {
        // Stop the timer
    clearInterval(timerInterval);

    // Reset the timer display
    document.getElementById('minutes').innerHTML = workTime < 10 ? `0${workTime}` : workTime;
    document.getElementById('seconds').innerHTML = "00";

    // Reset the active panel to 'work'
    workTitle.classList.add('active');
    breakTitle.classList.remove('active');

    // Show the start button and hide the reset button
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
    }

