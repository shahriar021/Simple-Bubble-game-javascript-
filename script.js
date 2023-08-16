timer = 10;
var hitBubble = 0;
var score = 0;

function makeBubble() {
  var bubbleStore = " ";

  for (let i = 1; i <= 160; i++) {
    var rn = Math.floor(Math.random() * 10);
    bubbleStore += ` <div class="bubble"> ${rn} </div> `;
  }

  document.querySelector("#pbtm").innerHTML = bubbleStore;
}

function runTimer() {
  var timeInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeInt);
      document.querySelector("#pbtm").innerHTML = `<h2>Game Over ${score}</h2>`;
    }
  }, 1000);
}

function hitBox(){
    hitBubble = Math.floor(Math.random() * 10);
    document.querySelector("#hitBox").textContent = hitBubble;
    
}

function increaseScore(){
   
    score+=10;
    document.querySelector("#score").textContent = score;
     
}

document.querySelector('#pbtm').addEventListener('click',function(value){
    var clicked = value.target.textContent;
    if(clicked == hitBubble){
        increaseScore();
        makeBubble(); 
        hitBox();
        document.querySelector("#timer").textContent = timer;
    }

})

makeBubble();
runTimer();
hitBox();
