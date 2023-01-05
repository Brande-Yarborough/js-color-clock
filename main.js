// var time = new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

const $clockDisplay = document.querySelector('.clock-display');
const $progressBar = document.querySelector('.clock-progress-bar');
setInterval(function () {
    const currentDate = new Date();
    $clockDisplay.innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    
});
  
  

  

//document.querySelector('.clock-display');
//let currentDate = new Date();
//let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
//console.log(time);