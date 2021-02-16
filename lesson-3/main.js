var animationPlayState = "running";


function toggleAnimation (){
  var square = document.getElementById("square");

  if(animationPlayState === "running")  {
    animationPlayState = "paused";
  }
  else {
    animationPlayState = "running";
  }

  square.style["animation-play-state"] = animationPlayState;
}
