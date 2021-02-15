
var cars = [
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
var index = 0;
var sliderInterval;

function getSliderView(){
  return window.document.getElementById("slider-view");
}

function showNextImg(){
  if(index === cars.length-1)
    index=0;
  else
    index++;

  var newImg = cars[index];
  getSliderView().setAttribute("src",newImg );
}

function showPrevImg(){
  if(index === 0){
    index = cars.length-1;
  }
  else {
    index--;
  }

  var newImg = cars[index];
  getSliderView().setAttribute("src",newImg );
}

function autoPlay(){
  sliderInterval = setInterval(showNextImg, 3000);
}

function stopAutoPlay(){
  clearInterval(sliderInterval);
}

function main(){
  getSliderView().setAttribute("src", cars[index]);
}

main();