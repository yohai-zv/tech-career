var loc = "left";
var isPlaying = true;
var interval;

startInterval();


function startInterval(){
  startAnimation();
  interval = setInterval(startAnimation,2000)
}

function startAnimation(){
  var square = document.getElementById("square");
  if(loc === "left"){
    square.style["background-color"] = "yellow"
    square.style.transform = "translateX(200px)";

    loc = "right";
  }
  else{
    square.style["background-color"] = "red"
    square.style.transform = "translateX(0px)";

    loc = "left";
  }
}


function toggleAnimation (){
  if(isPlaying){
    clearInterval(interval);
    isPlaying = false;
  }
  else {
    startInterval();
    isPlaying = true;
  }
}
