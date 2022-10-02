import Player from '@vimeo/player';

const player = new Player("vimeo-player") 

const onPlay = function (data) {
    // data is an object containing properties specific to that event
    //  console.log('played the video!')
    console.log(data);
    
    let timeJSON = JSON.stringify(data);
    // console.log(timeJSON);
    localStorage.setItem("videoplayer-current-time", timeJSON)
    
};

player.on('timeupdate', onPlay);

 const savedTimeVideo = localStorage.getItem("videoplayer-current-time")
// console.log(savedTimeVideo);

 const savedTimeVideoParse = JSON.parse(savedTimeVideo);

if (savedTimeVideoParse !== null) {
console.log(savedTimeVideoParse);
player.setCurrentTime(savedTimeVideoParse.seconds)  
}





// import Player from '@vimeo/player';
// const throttle = require('lodash.throttle');
// const player = new Player("vimeo-player") 
// let saveTime = function (data) {
//     //  console.log('played the video!');
//     console.log(data);
//     localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
// }


// player.on('timeupdate', throttle(saveTime, wait=1000)) 


   


// const lastTimeVideo = localStorage.getItem("videoplayer-current-time");
// console.log(lastTimeVideo);

// // console.log( parsedTimeVideo.seconds);

// if (lastTimeVideo !== null) {
// const parsedTimeVideo = JSON.parse(lastTimeVideo);
// player.setCurrentTime(parsedTimeVideo.seconds) 
// } 

