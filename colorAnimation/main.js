var animationState = "paused";


function toggleAnimation(){
  var buttonText;
  if(animationState === "running"){
    animationState = "paused";
    buttonText = "Start";
  }
  else {
    animationState = "running"
    buttonText = "Pause";
  }

    document.getElementById("toggle-animation-button").innerHTML = buttonText;
    document.getElementById("loader").style["animation-play-state"] = animationState;

}
toggleAnimation();