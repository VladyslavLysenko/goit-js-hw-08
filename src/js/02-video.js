import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// const onPlay = function (data) {
//     // console.log(data.seconds);
//     let savedTimeJSON = JSON.stringify(data.seconds)
//     // console.log(savedTimeJSON);

//     localStorage.setItem("videoplayer-current-time", savedTimeJSON)
//     // data is an object containing properties specific to that event
// };

// player.on('timeupdate', throttle(onPlay, wait = 1000));
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
  }, wait=1000)
);


const savedTimeVideo = localStorage.getItem("videoplayer-current-time")
// console.log(savedTimeVideo);
const savedTimeVideoParse = JSON.parse(savedTimeVideo);
console.log(savedTimeVideoParse);

if (savedTimeVideoParse !== null) {
   player.setCurrentTime(savedTimeVideoParse)
}



// VAR 2 (тротл не працює у гіті)

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
// const player = new Player("vimeo-player") 

// let throttle = require('lodash.throttle');

// const onPlay = function (data) {
//     // data is an object containing properties specific to that event
//     //  console.log('played the video!')
//     console.log(data);
    
//     let timeJSON = JSON.stringify(data);
//     // console.log(timeJSON);
//     localStorage.setItem("videoplayer-current-time", timeJSON)
    
// };

// player.on('timeupdate', throttle(onPlay, wait = 1000));

//  const savedTimeVideo = localStorage.getItem("videoplayer-current-time")
// // console.log(savedTimeVideo);

//  const savedTimeVideoParse = JSON.parse(savedTimeVideo);

// if (savedTimeVideoParse !== null) {
// console.log(savedTimeVideoParse);
// player.setCurrentTime(savedTimeVideoParse.seconds)  
// }




// var 2.1
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

