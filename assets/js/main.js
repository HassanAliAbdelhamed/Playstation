// Store data in local storage
localStorage.setItem('d1Total', 0);
localStorage.setItem('d1Tota2', 0);
localStorage.setItem('d1Tota3', 0);
localStorage.setItem('d1Tota4', 0);
localStorage.setItem('d1Tota5', 0);
localStorage.setItem('d1Tota6', 0);
localStorage.setItem('d1Tota7', 0);
localStorage.setItem('d1Tota8', 0);




let tr1 = document.getElementById('1');
let tr2 = document.getElementById('2');
let tr3 = document.getElementById('3');
let tr4 = document.getElementById('4');
let tr5 = document.getElementById('5');
let tr6 = document.getElementById('6');
let tr7 = document.getElementById('7');



function d(sectionId){
  // Device 1
let hours1 = 0;
let min1 = 0 ;
let d1={
  total :0
}

let timerInterval;

let btads1 = document.querySelector(`#D${sectionId} #btads1`);
console.log(btads1);
btads1.onclick = ()=>{
  let selads1 = document.querySelector(`#D${sectionId} #selads1`);
  console.log();
  let total1 = document.querySelector(`#D${sectionId} #total1`);
  let newTotal1 = parseInt(total1.textContent) + parseInt(selads1.value);
  total1.textContent = newTotal1
}
let bttimer1 = document.querySelector(`#D${sectionId} #bttimer1`)
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

// Timer 
function timer(){
  const timerDisplay = document.querySelector(`#D${sectionId} #timer`);

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
  const timerDisplay = document.querySelector(`#D${sectionId} #timer`);
  timerDisplay.textContent = '00:00:00'; // Set display to 00:00:00
  seconds = 0;
  minutes = 0;
  hours = 0;
  let totalTime1 = parseInt((parseInt(min1) + parseInt(hours1 * 60)) * 0.25);
  console.log(totalTime1);
  let total1 = document.querySelector(`#D${sectionId} #total1`);
  let newTotal1 = parseInt(total1.textContent) + parseInt(totalTime1);
  totalTime1=0;
  hours1 = 0 ;
  min1=0;
  total1.textContent = newTotal1 ;
  bttimer1.style.backgroundColor="#009961";
  bttimer1.textContent = "Start";
  counter=0;
}



let save1 = document.querySelector(`#D1 #save1`);
let save2 = document.querySelector(`#D2 #save1`);
let save3 = document.querySelector(`#D3 #save1`);
let save4 = document.querySelector(`#D4 #save1`);
let save5 = document.querySelector(`#D5 #save1`);
let save6 = document.querySelector(`#D6 #save1`);
let save7 = document.querySelector(`#D7 #save1`);

save1.onclick = ()=>{
  resetTimer();
  let total1 = document.querySelector(`#D1 #total1`);
  let total = parseInt(localStorage.getItem('d1Total'));
  total =total + parseInt(total1.textContent);
  localStorage.setItem('d1Total', total);
  total1.textContent=0;
  tr1.textContent = total;
}

save2.onclick = ()=>{
  resetTimer();
  let total1 = document.querySelector(`#D2 #total1`);
  let total = parseInt(localStorage.getItem('d1Tota2'));
  total =total + parseInt(total1.textContent);
  localStorage.setItem('d1Tota2', total);
  total1.textContent=0;
  tr2.textContent = total;
}

save3.onclick = ()=>{
  resetTimer();
  let total1 = document.querySelector(`#D3 #total1`);
  let total = parseInt(localStorage.getItem('d1Tota3'));
  total =total + parseInt(total1.textContent);
  localStorage.setItem('d1Tota3', total);
  total1.textContent=0;
  tr3.textContent = total;
}
save4.onclick = ()=>{
  resetTimer();
  let total1 = document.querySelector(`#D4 #total1`);
  let total = parseInt(localStorage.getItem('d1Tota4'));
  total =total + parseInt(total1.textContent);
  localStorage.setItem('d1Tota4', total);
  total1.textContent=0;
  tr4.textContent = total;
}

save5.onclick = ()=>{
  resetTimer();
  let total1 = document.querySelector(`#D5 #total1`);
  let total = parseInt(localStorage.getItem('d1Tota5'));
  total =total + parseInt(total1.textContent);
  localStorage.setItem('d1Tota5', total);
    total1.textContent=0;
  tr5.textContent = total;

}

save6.onclick = ()=>{
  resetTimer();
  let total1 = document.querySelector(`#D6 #total1`);
  let total = parseInt(localStorage.getItem('d1Tota6'));
  total =total + parseInt(total1.textContent);
  localStorage.setItem('d1Tota6', total);
  total1.textContent=0;
  tr6.textContent = total;

}

save7.onclick = ()=>{
  resetTimer();
  let total1 = document.querySelector(`#D7 #total1`);
  let total = parseInt(localStorage.getItem('d1Tota7'));
  total =total + parseInt(total1.textContent);
  localStorage.setItem('d1Tota7', total);
  total1.textContent=0;
  tr7.textContent = total;

}

}

d(1)
d(2)
d(3)
d(4)
d(5)
d(6)
d(7)
// Remove data from local storage




