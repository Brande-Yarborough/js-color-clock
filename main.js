// var time = new Date();
// console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

//document.querySelector('.clock-display');
//let currentDate = new Date();
//let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
//console.log(time);



//console.log the current time on page load
(function () {
    "use strict";
    
    const $clockdisplay = document.querySelector('.clock-display');
    const $progressBar = document.querySelector('.clock-progress-bar');
    const $clock = document.querySelector('.clock');

    let isHovering = false;

    $clock.addEventListener("mouseover", function () {
        isHovering = true;
    });

    $clock.addEventListener("mouseout", function () {
        isHovering = false;
    });

   
    setInterval(function () {
    const currentTime = new Date(); 
    //console.log(currentTime);
    let seconds, minutes, hour;
    seconds = ("0" + currentTime.getSeconds()).slice(-2);
    console.log(currentTime.getSeconds()/60);
     minutes = ("0" + currentTime.getMinutes()).slice(-2);
     hour = ("0" + currentTime.getHours()).slice(-2);
     const hexValue = `eb40${seconds}`;
     console.log(hexValue);//console.log a hexidecimal color that is based on the current second, every second
    $clock.style = `background: #${hexValue}`;
    
     if (isHovering) {
     hour = hexValue.substring(0, 2);
     minutes = hexValue.substring(2, 4);
     seconds = hexValue.substring(4);
    //console.log(hour, minutes, seconds);
    

    } 

  $clockdisplay.innerHTML = `${hour}:${minutes}:${seconds}`; // use back tick;gives back string
        ;

    

    $progressBar.style.width = `${(seconds / 60) * 14}rem`;
   

    }, 1000);
})();

    

    
   
   
    //$clockDisplay.innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    
