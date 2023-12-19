// Device 1
let hours1 = 0;
let min1 = 0 ;
let d1={
  total :0
}

let timerInterval;

let btads1 = document.getElementById("btads1");
console.log(btads1);
btads1.onclick = ()=>{
  let selads1 = document.getElementById("selads1");
  console.log();
  let total1 = document.getElementById("total1");
  let newTotal1 = parseInt(total1.textContent) + parseInt(selads1.value);
  total1.textContent = newTotal1
}
let bttimer1 = document.getElementById("bttimer1")
let counter = 0 ;
bttimer1.onclick = ()=>{
  if(counter == 0){
    timer();
    bttimer1.style.backgroundColor="red";
    bttimer1.textContent = "Stop"
    counter=1;
  }
  else{
    resetTimer();
  }
}

let save1 = document.getElementById("save1");
save1.onclick = ()=>{
  resetTimer();
  let total1 = document.getElementById("total1");
  d1.total = d1.total + parseInt(total1.textContent);
  total1.textContent=0;
}

// Timer 
function timer(){
  const timerDisplay = document.getElementById('timer');

let seconds = 0;
let minutes = 0;
let hours = 0;

function displayTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const formattedTime = 
    (hours < 10 ? '0' + hours : hours) + ':' +
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds);
    hours1 = hours ;
    min1 = minutes;

  timerDisplay.textContent = formattedTime;
}
 timerInterval = setInterval(displayTimer, 1000);
}



function resetTimer() {
  clearInterval(timerInterval); // Clear the interval
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = '00:00:00'; // Set display to 00:00:00
  seconds = 0;
  minutes = 0;
  hours = 0;
  let totalTime1 = parseInt((parseInt(min1) + parseInt(hours1 * 60)) * 0.25);
  console.log(totalTime1);
  let total1 = document.getElementById("total1");
  let newTotal1 = parseInt(total1.textContent) + parseInt(totalTime1);
  totalTime1=0;
  total1.textContent = newTotal1 ;
  bttimer1.style.backgroundColor="#009961";
  bttimer1.textContent = "Start";
  counter=0;
}
