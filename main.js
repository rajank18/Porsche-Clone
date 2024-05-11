
// let heading = document.getElementById('myHeading');

// let btn = document.getElementById('btn');
// let body = document.body
// let isWhite = false;

// btn.addEventListener('click', function(){

//     if(isWhite){
//          body.style.backgroundColor = "black";
//          heading.style.color = "white";
//     } 
//     else{
//       body.style.backgroundColor = "white";
//       heading.style.color = "black";
    
//     }

//     isWhite = !isWhite;
// })

// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//   }

var playTimers = {};

    function startPlayTimer(videoId) {
        // Set a timer to start playing after 2 seconds
        playTimers[videoId] = setTimeout(function () {
            playVideo(videoId);
        }, 2000);
    }

    function clearPlayTimer(videoId) {
        // Clear the timer when the cursor is moved away
        clearTimeout(playTimers[videoId]);
        pauseVideo(videoId);
    }

    function playVideo(videoId) {
        var video = document.getElementById(videoId);
        video.play();
    }

    function pauseVideo(videoId) {
        var video = document.getElementById(videoId);
        video.pause();
    }

